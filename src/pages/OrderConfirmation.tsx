import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Order {
  id: string;
  status: string;
  total_amount: number;
  shipping_address: any;
  created_at: string;
  order_items: Array<{
    id: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    configuration: any;
    product: {
      name: string;
      image_url: string;
    };
  }>;
}

export function OrderConfirmation() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  const fetchOrder = async () => {
    if (!orderId) return;

    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items(
            *,
            product:products(name, image_url)
          )
        `)
        .eq('id', orderId)
        .single();

      if (error) throw error;
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Order not found</h2>
          <p className="text-slate-600 mb-4">The order you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-slate-600 mb-2">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <p className="text-slate-500">
            Order #{order.id.slice(0, 8).toUpperCase()}
          </p>
        </div>

        {/* Order Status Timeline */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Status</h2>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mb-2">
                <CheckCircle className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-green-600">Confirmed</span>
              <span className="text-xs text-slate-500">Just now</span>
            </div>
            <div className="flex-1 h-0.5 bg-slate-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-200 text-slate-400 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-slate-400">Processing</span>
              <span className="text-xs text-slate-500">1-2 days</span>
            </div>
            <div className="flex-1 h-0.5 bg-slate-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-200 text-slate-400 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-slate-400">Shipped</span>
              <span className="text-xs text-slate-500">3-5 days</span>
            </div>
            <div className="flex-1 h-0.5 bg-slate-200 mx-4"></div>
            <div className="flex flex-col items-center">
              <div className="bg-slate-200 text-slate-400 rounded-full w-10 h-10 flex items-center justify-center mb-2">
                <Home className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-slate-400">Delivered</span>
              <span className="text-xs text-slate-500">5-7 days</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Items</h2>
              <div className="space-y-6">
                {order.order_items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 pb-6 border-b border-slate-200 last:border-b-0">
                    <img
                      src={item.product.image_url}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.product.name}</h3>
                      <div className="text-sm text-slate-600 mb-2">
                        <p>Quantity: {item.quantity}</p>
                        <p>Unit Price: ${item.unit_price.toFixed(2)}</p>
                      </div>
                      {item.configuration && Object.keys(item.configuration).length > 0 && (
                        <div className="mt-2">
                          <h4 className="text-sm font-medium text-slate-700 mb-1">Configuration:</h4>
                          <div className="text-xs text-slate-600 space-y-1">
                            {Object.entries(item.configuration).map(([key, value]: [string, any]) => (
                              <div key={key} className="flex justify-between">
                                <span>{key}:</span>
                                <span className="font-medium">{value.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">
                        ${item.total_price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary & Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">${(order.total_amount - 29.99 - (order.total_amount * 0.08)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-medium">$29.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Tax</span>
                  <span className="font-medium">${(order.total_amount * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-slate-900">Total</span>
                    <span className="text-lg font-bold text-slate-900">
                      ${order.total_amount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Shipping Address</h3>
              <div className="text-sm text-slate-600 space-y-1">
                <p>{order.shipping_address.fullName}</p>
                <p>{order.shipping_address.address}</p>
                <p>
                  {order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zipCode}
                </p>
                <p>{order.shipping_address.country}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Download className="h-5 w-5 mr-2" />
                Download Invoice
              </button>
              <Link
                to="/products"
                className="block w-full bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-300 transition-colors text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• You'll receive an email confirmation shortly</li>
            <li>• We'll send you tracking information once your order ships</li>
            <li>• Your custom device will be assembled and tested before shipping</li>
            <li>• Estimated delivery: 5-7 business days</li>
          </ul>
        </div>
      </div>
    </div>
  );
}