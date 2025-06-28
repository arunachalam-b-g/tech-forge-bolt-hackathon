import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Plus, Minus, Check, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useCart } from '../contexts/CartContext';
import { v4 as uuidv4 } from 'uuid';

interface Product {
  id: string;
  name: string;
  description: string;
  base_price: number;
  image_url: string;
  category: {
    name: string;
  };
}

interface ComponentType {
  id: string;
  name: string;
  description: string;
  is_required: boolean;
}

interface Component {
  id: string;
  name: string;
  description: string;
  price: number;
  specifications: any;
  is_default: boolean;
}

interface ProductConfiguration {
  [componentTypeId: string]: {
    component: Component;
    componentType: ComponentType;
  };
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [componentTypes, setComponentTypes] = useState<ComponentType[]>([]);
  const [availableComponents, setAvailableComponents] = useState<{ [typeId: string]: Component[] }>({});
  const [configuration, setConfiguration] = useState<ProductConfiguration>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  useEffect(() => {
    calculateTotalPrice();
  }, [configuration, product]);

  const fetchProductDetails = async () => {
    if (!id) return;

    try {
      // Fetch product details
      const { data: productData } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(name)
        `)
        .eq('id', id)
        .single();

      if (!productData) {
        navigate('/products');
        return;
      }

      setProduct(productData);

      // Fetch component types and components for this product
      const { data: productComponents } = await supabase
        .from('product_components')
        .select(`
          component_type_id,
          component_id,
          is_default,
          component_types(id, name, description, is_required),
          components(id, name, description, price, specifications)
        `)
        .eq('product_id', id);

      if (productComponents) {
        // Group components by type
        const componentsByType: { [typeId: string]: Component[] } = {};
        const types: ComponentType[] = [];
        const defaultConfig: ProductConfiguration = {};

        productComponents.forEach((pc: any) => {
          const componentType = pc.component_types;
          const component = { ...pc.components, is_default: pc.is_default };

          if (!componentsByType[componentType.id]) {
            componentsByType[componentType.id] = [];
            types.push(componentType);
          }

          componentsByType[componentType.id].push(component);

          // Set default configuration
          if (pc.is_default) {
            defaultConfig[componentType.id] = {
              component,
              componentType
            };
          }
        });

        setComponentTypes(types);
        setAvailableComponents(componentsByType);
        setConfiguration(defaultConfig);
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPrice = () => {
    if (!product) return;

    let total = product.base_price;
    
    Object.values(configuration).forEach(({ component }) => {
      total += component.price;
    });

    setTotalPrice(total);
  };

  const handleComponentChange = (componentTypeId: string, component: Component) => {
    const componentType = componentTypes.find(ct => ct.id === componentTypeId);
    if (componentType) {
      setConfiguration(prev => ({
        ...prev,
        [componentTypeId]: {
          component,
          componentType
        }
      }));
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: uuidv4(),
      productId: product.id,
      productName: product.name,
      productImage: product.image_url,
      basePrice: product.base_price,
      configuration: Object.fromEntries(
        Object.entries(configuration).map(([typeId, { component, componentType }]) => [
          componentType.name,
          {
            id: component.id,
            name: component.name,
            price: component.price,
            specifications: component.specifications
          }
        ])
      ),
      totalPrice,
      quantity
    };

    addItem(cartItem);
    
    // Show success message or redirect to cart
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Product not found</h2>
          <p className="text-slate-600 mb-4">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/products')}
          className="flex items-center text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image and Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category?.name}
                </span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="text-slate-600 text-sm ml-1">(4.9)</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
              <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-slate-700">Base Price:</span>
                  <span className="text-2xl font-bold text-slate-900">
                    ${product.base_price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-slate-700">Total Price:</span>
                  <span className="text-3xl font-bold text-blue-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Customize Your Device</h2>

              <div className="space-y-8">
                {componentTypes.map((componentType) => {
                  const components = availableComponents[componentType.id] || [];
                  const selectedComponent = configuration[componentType.id]?.component;

                  return (
                    <div key={componentType.id} className="border-b border-slate-200 pb-8 last:border-b-0">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {componentType.name}
                          {componentType.is_required && (
                            <span className="text-red-500 ml-1">*</span>
                          )}
                        </h3>
                        {selectedComponent && (
                          <span className="text-sm font-medium text-green-600 flex items-center">
                            <Check className="h-4 w-4 mr-1" />
                            Selected
                          </span>
                        )}
                      </div>

                      {componentType.description && (
                        <p className="text-slate-600 text-sm mb-4">{componentType.description}</p>
                      )}

                      <div className="grid gap-3">
                        {components.map((component) => {
                          const isSelected = selectedComponent?.id === component.id;
                          
                          return (
                            <button
                              key={component.id}
                              onClick={() => handleComponentChange(componentType.id, component)}
                              className={`text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                                isSelected
                                  ? 'border-blue-500 bg-blue-50 shadow-md'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h4 className={`font-medium ${
                                  isSelected ? 'text-blue-900' : 'text-slate-900'
                                }`}>
                                  {component.name}
                                </h4>
                                <div className="text-right">
                                  <span className={`font-semibold ${
                                    isSelected ? 'text-blue-600' : 'text-slate-900'
                                  }`}>
                                    {component.price > 0 ? `+$${component.price.toFixed(2)}` : 'Included'}
                                  </span>
                                </div>
                              </div>
                              
                              {component.description && (
                                <p className={`text-sm mb-2 ${
                                  isSelected ? 'text-blue-700' : 'text-slate-600'
                                }`}>
                                  {component.description}
                                </p>
                              )}

                              {component.specifications && Object.keys(component.specifications).length > 0 && (
                                <div className="text-xs text-slate-500">
                                  {Object.entries(component.specifications).slice(0, 3).map(([key, value]) => (
                                    <span key={key} className="mr-3">
                                      {key}: {String(value)}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-slate-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ${(totalPrice * quantity).toFixed(2)}
              </button>

              <p className="text-center text-slate-600 text-sm mt-4">
                Free shipping on orders over $1000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}