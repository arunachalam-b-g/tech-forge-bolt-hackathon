/*
  # Sample Data for TechForge Ecommerce

  This migration inserts sample categories, products, component types, 
  components, and their relationships to demonstrate the customization system.
*/

-- Insert Categories
INSERT INTO categories (id, name, description, image_url) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Smartphones', 'Latest smartphones with customizable hardware', 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Laptops', 'High-performance laptops for work and gaming', 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Desktops', 'Custom desktop computers for any use case', 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Monitors', 'Professional and gaming monitors', 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'),
  ('550e8400-e29b-41d4-a716-446655440005', 'Accessories', 'Keyboards, mice, and other peripherals', 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg');

-- Insert Component Types
INSERT INTO component_types (id, name, description, is_required) VALUES
  ('660e8400-e29b-41d4-a716-446655440001', 'RAM', 'System memory', true),
  ('660e8400-e29b-41d4-a716-446655440002', 'Processor', 'CPU processor', true),
  ('660e8400-e29b-41d4-a716-446655440003', 'Storage', 'Internal storage', true),
  ('660e8400-e29b-41d4-a716-446655440004', 'Camera', 'Camera system', false),
  ('660e8400-e29b-41d4-a716-446655440005', 'Display', 'Screen display', true),
  ('660e8400-e29b-41d4-a716-446655440006', 'Operating System', 'Device OS', true),
  ('660e8400-e29b-41d4-a716-446655440007', 'Graphics Card', 'GPU for graphics processing', false),
  ('660e8400-e29b-41d4-a716-446655440008', 'Battery', 'Power source', true),
  ('660e8400-e29b-41d4-a716-446655440009', 'Color', 'Device color', false),
  ('660e8400-e29b-41d4-a716-446655440010', 'Warranty', 'Warranty coverage', false);

-- Insert RAM Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', '8GB Samsung DDR4', 'Samsung 8GB DDR4 3200MHz', 120.00, '{"capacity": "8GB", "brand": "Samsung", "type": "DDR4", "speed": "3200MHz"}'),
  ('770e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', '16GB Samsung DDR4', 'Samsung 16GB DDR4 3200MHz', 240.00, '{"capacity": "16GB", "brand": "Samsung", "type": "DDR4", "speed": "3200MHz"}'),
  ('770e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', '32GB Samsung DDR4', 'Samsung 32GB DDR4 3200MHz', 480.00, '{"capacity": "32GB", "brand": "Samsung", "type": "DDR4", "speed": "3200MHz"}'),
  ('770e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440001', '8GB Corsair DDR4', 'Corsair Vengeance 8GB DDR4 3600MHz', 140.00, '{"capacity": "8GB", "brand": "Corsair", "type": "DDR4", "speed": "3600MHz"}'),
  ('770e8400-e29b-41d4-a716-446655440005', '660e8400-e29b-41d4-a716-446655440001', '16GB Corsair DDR4', 'Corsair Vengeance 16GB DDR4 3600MHz', 280.00, '{"capacity": "16GB", "brand": "Corsair", "type": "DDR4", "speed": "3600MHz"}');

-- Insert Processor Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440006', '660e8400-e29b-41d4-a716-446655440002', 'Intel Core i5-12400F', 'Intel 12th Gen Core i5 6-Core Processor', 200.00, '{"brand": "Intel", "model": "Core i5-12400F", "cores": 6, "threads": 12, "base_clock": "2.5GHz", "boost_clock": "4.4GHz"}'),
  ('770e8400-e29b-41d4-a716-446655440007', '660e8400-e29b-41d4-a716-446655440002', 'Intel Core i7-12700F', 'Intel 12th Gen Core i7 12-Core Processor', 350.00, '{"brand": "Intel", "model": "Core i7-12700F", "cores": 12, "threads": 20, "base_clock": "2.1GHz", "boost_clock": "4.9GHz"}'),
  ('770e8400-e29b-41d4-a716-446655440008', '660e8400-e29b-41d4-a716-446655440002', 'AMD Ryzen 5 5600X', 'AMD Ryzen 5 6-Core Processor', 220.00, '{"brand": "AMD", "model": "Ryzen 5 5600X", "cores": 6, "threads": 12, "base_clock": "3.7GHz", "boost_clock": "4.6GHz"}'),
  ('770e8400-e29b-41d4-a716-446655440009', '660e8400-e29b-41d4-a716-446655440002', 'AMD Ryzen 7 5800X', 'AMD Ryzen 7 8-Core Processor', 320.00, '{"brand": "AMD", "model": "Ryzen 7 5800X", "cores": 8, "threads": 16, "base_clock": "3.8GHz", "boost_clock": "4.7GHz"}'),
  ('770e8400-e29b-41d4-a716-446655440010', '660e8400-e29b-41d4-a716-446655440002', 'Snapdragon 8 Gen 2', 'Qualcomm Snapdragon 8 Gen 2 Mobile Processor', 0.00, '{"brand": "Qualcomm", "model": "Snapdragon 8 Gen 2", "cores": 8, "process": "4nm", "gpu": "Adreno 740"}');

-- Insert Storage Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440011', '660e8400-e29b-41d4-a716-446655440003', '256GB NVMe SSD', 'Samsung 980 256GB NVMe SSD', 80.00, '{"capacity": "256GB", "type": "NVMe SSD", "brand": "Samsung", "read_speed": "3,500 MB/s", "write_speed": "3,000 MB/s"}'),
  ('770e8400-e29b-41d4-a716-446655440012', '660e8400-e29b-41d4-a716-446655440003', '512GB NVMe SSD', 'Samsung 980 512GB NVMe SSD', 120.00, '{"capacity": "512GB", "type": "NVMe SSD", "brand": "Samsung", "read_speed": "3,500 MB/s", "write_speed": "3,200 MB/s"}'),
  ('770e8400-e29b-41d4-a716-446655440013', '660e8400-e29b-41d4-a716-446655440003', '1TB NVMe SSD', 'Samsung 980 1TB NVMe SSD', 200.00, '{"capacity": "1TB", "type": "NVMe SSD", "brand": "Samsung", "read_speed": "3,500 MB/s", "write_speed": "3,300 MB/s"}'),
  ('770e8400-e29b-41d4-a716-446655440014', '660e8400-e29b-41d4-a716-446655440003', '128GB Internal', 'Internal 128GB Storage', 0.00, '{"capacity": "128GB", "type": "Internal", "interface": "UFS 3.1"}'),
  ('770e8400-e29b-41d4-a716-446655440015', '660e8400-e29b-41d4-a716-446655440003', '256GB Internal', 'Internal 256GB Storage', 50.00, '{"capacity": "256GB", "type": "Internal", "interface": "UFS 3.1"}');

-- Insert Camera Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440016', '660e8400-e29b-41d4-a716-446655440004', '48MP Main Camera', 'Sony IMX586 48MP Camera', 80.00, '{"megapixels": 48, "sensor": "Sony IMX586", "aperture": "f/1.8", "features": ["OIS", "4K Video"]}'),
  ('770e8400-e29b-41d4-a716-446655440017', '660e8400-e29b-41d4-a716-446655440004', '64MP Pro Camera', 'Samsung GW1 64MP Camera', 120.00, '{"megapixels": 64, "sensor": "Samsung GW1", "aperture": "f/1.7", "features": ["OIS", "8K Video", "Night Mode"]}'),
  ('770e8400-e29b-41d4-a716-446655440018', '660e8400-e29b-41d4-a716-446655440004', '108MP Ultra Camera', 'Samsung HM3 108MP Camera', 200.00, '{"megapixels": 108, "sensor": "Samsung HM3", "aperture": "f/1.5", "features": ["OIS", "8K Video", "AI Enhancement"])}');

-- Insert Display Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440019', '660e8400-e29b-41d4-a716-446655440005', '6.1" OLED Display', 'Samsung 6.1 inch OLED Display', 150.00, '{"size": "6.1\"", "type": "OLED", "resolution": "2340x1080", "refresh_rate": "120Hz", "brightness": "1000 nits"}'),
  ('770e8400-e29b-41d4-a716-446655440020', '660e8400-e29b-41d4-a716-446655440005', '6.7" OLED Display', 'Samsung 6.7 inch OLED Display', 200.00, '{"size": "6.7\"", "type": "OLED", "resolution": "3200x1440", "refresh_rate": "120Hz", "brightness": "1200 nits"}'),
  ('770e8400-e29b-41d4-a716-446655440021', '660e8400-e29b-41d4-a716-446655440005', '15.6" IPS Display', 'BOE 15.6 inch IPS Display', 120.00, '{"size": "15.6\"", "type": "IPS", "resolution": "1920x1080", "refresh_rate": "60Hz", "color_gamut": "sRGB 100%"}'),
  ('770e8400-e29b-41d4-a716-446655440022', '660e8400-e29b-41d4-a716-446655440005', '17.3" 4K Display', 'LG 17.3 inch 4K Display', 300.00, '{"size": "17.3\"", "type": "IPS", "resolution": "3840x2160", "refresh_rate": "60Hz", "color_gamut": "Adobe RGB 99%"}');

-- Insert Operating System Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440023', '660e8400-e29b-41d4-a716-446655440006', 'Android 14', 'Android 14 with latest security patches', 0.00, '{"version": "Android 14", "security_patch": "2024-01", "features": ["Material You", "Privacy Dashboard"]}'),
  ('770e8400-e29b-41d4-a716-446655440024', '660e8400-e29b-41d4-a716-446655440006', 'Windows 11 Home', 'Windows 11 Home Edition', 120.00, '{"version": "Windows 11 Home", "build": "22H2", "features": ["Microsoft Store", "Xbox Game Pass"]}'),
  ('770e8400-e29b-41d4-a716-446655440025', '660e8400-e29b-41d4-a716-446655440006', 'Windows 11 Pro', 'Windows 11 Professional Edition', 200.00, '{"version": "Windows 11 Pro", "build": "22H2", "features": ["BitLocker", "Remote Desktop", "Hyper-V"]}'),
  ('770e8400-e29b-41d4-a716-446655440026', '660e8400-e29b-41d4-a716-446655440006', 'Ubuntu 22.04 LTS', 'Ubuntu Linux Long Term Support', 0.00, '{"version": "Ubuntu 22.04 LTS", "desktop": "GNOME", "support": "5 years"}');

-- Insert Graphics Card Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440027', '660e8400-e29b-41d4-a716-446655440007', 'RTX 4060', 'NVIDIA GeForce RTX 4060', 300.00, '{"brand": "NVIDIA", "model": "RTX 4060", "memory": "8GB GDDR6", "cuda_cores": 3072}'),
  ('770e8400-e29b-41d4-a716-446655440028', '660e8400-e29b-41d4-a716-446655440007', 'RTX 4070', 'NVIDIA GeForce RTX 4070', 500.00, '{"brand": "NVIDIA", "model": "RTX 4070", "memory": "12GB GDDR6X", "cuda_cores": 5888}'),
  ('770e8400-e29b-41d4-a716-446655440029', '660e8400-e29b-41d4-a716-446655440007', 'RX 7600', 'AMD Radeon RX 7600', 270.00, '{"brand": "AMD", "model": "RX 7600", "memory": "8GB GDDR6", "stream_processors": 2048}');

-- Insert Battery Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440030', '660e8400-e29b-41d4-a716-446655440008', '4000mAh Battery', 'Lithium-ion 4000mAh Battery', 40.00, '{"capacity": "4000mAh", "type": "Li-ion", "fast_charging": "25W"}'),
  ('770e8400-e29b-41d4-a716-446655440031', '660e8400-e29b-41d4-a716-446655440008', '5000mAh Battery', 'Lithium-ion 5000mAh Battery', 60.00, '{"capacity": "5000mAh", "type": "Li-ion", "fast_charging": "45W"}'),
  ('770e8400-e29b-41d4-a716-446655440032', '660e8400-e29b-41d4-a716-446655440008', '6000mAh Battery', 'Lithium-ion 6000mAh Battery', 80.00, '{"capacity": "6000mAh", "type": "Li-ion", "fast_charging": "65W"}');

-- Insert Color Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440033', '660e8400-e29b-41d4-a716-446655440009', 'Midnight Black', 'Premium Midnight Black Finish', 0.00, '{"color": "Midnight Black", "finish": "Matte"}'),
  ('770e8400-e29b-41d4-a716-446655440034', '660e8400-e29b-41d4-a716-446655440009', 'Ocean Blue', 'Ocean Blue Premium Finish', 25.00, '{"color": "Ocean Blue", "finish": "Glossy"}'),
  ('770e8400-e29b-41d4-a716-446655440035', '660e8400-e29b-41d4-a716-446655440009', 'Rose Gold', 'Elegant Rose Gold Finish', 50.00, '{"color": "Rose Gold", "finish": "Brushed Metal"}'),
  ('770e8400-e29b-41d4-a716-446655440036', '660e8400-e29b-41d4-a716-446655440009', 'Space Silver', 'Space Silver Metallic Finish', 30.00, '{"color": "Space Silver", "finish": "Metallic"}');

-- Insert Warranty Components
INSERT INTO components (id, component_type_id, name, description, price, specifications) VALUES
  ('770e8400-e29b-41d4-a716-446655440037', '660e8400-e29b-41d4-a716-446655440010', '1 Year Standard', 'Standard 1 Year Manufacturer Warranty', 0.00, '{"duration": "1 Year", "type": "Standard", "coverage": "Manufacturing defects"}'),
  ('770e8400-e29b-41d4-a716-446655440038', '660e8400-e29b-41d4-a716-446655440010', '2 Year Extended', 'Extended 2 Year Comprehensive Warranty', 120.00, '{"duration": "2 Years", "type": "Extended", "coverage": "Comprehensive including accidental damage"}'),
  ('770e8400-e29b-41d4-a716-446655440039', '660e8400-e29b-41d4-a716-446655440010', '3 Year Premium', 'Premium 3 Year Complete Protection', 250.00, '{"duration": "3 Years", "type": "Premium", "coverage": "Complete protection with priority support"}');

-- Insert Products
INSERT INTO products (id, category_id, name, description, base_price, image_url) VALUES
  ('880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'TechForge Phone Pro', 'Customizable flagship smartphone with premium features', 699.00, 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'),
  ('880e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 'TechForge Phone Lite', 'Affordable customizable smartphone for everyday use', 399.00, 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'),
  ('880e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440002', 'TechForge Laptop Gaming', 'High-performance gaming laptop with full customization', 1299.00, 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg'),
  ('880e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 'TechForge Laptop Business', 'Professional business laptop for productivity', 899.00, 'https://images.pexels.com/photos/18105/pexels-photo.jpg'),
  ('880e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440003', 'TechForge Desktop Workstation', 'Custom desktop workstation for professionals', 1599.00, 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg');

-- Insert Product-Component relationships for TechForge Phone Pro
INSERT INTO product_components (product_id, component_type_id, component_id, is_default) VALUES
  -- Processor options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440010', true),
  -- Storage options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440014', true),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440015', false),
  -- Camera options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440016', true),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440017', false),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440018', false),
  -- Display options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440005', '770e8400-e29b-41d4-a716-446655440019', true),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440005', '770e8400-e29b-41d4-a716-446655440020', false),
  -- OS options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440006', '770e8400-e29b-41d4-a716-446655440023', true),
  -- Battery options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440008', '770e8400-e29b-41d4-a716-446655440030', true),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440008', '770e8400-e29b-41d4-a716-446655440031', false),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440008', '770e8400-e29b-41d4-a716-446655440032', false),
  -- Color options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440033', true),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440034', false),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440035', false),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440036', false),
  -- Warranty options
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440037', true),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440038', false),
  ('880e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440039', false);

-- Insert Product-Component relationships for TechForge Laptop Gaming
INSERT INTO product_components (product_id, component_type_id, component_id, is_default) VALUES
  -- RAM options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440002', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440003', false),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440005', false),
  -- Processor options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440007', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440009', false),
  -- Storage options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440012', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440013', false),
  -- Display options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440005', '770e8400-e29b-41d4-a716-446655440021', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440005', '770e8400-e29b-41d4-a716-446655440022', false),
  -- OS options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440006', '770e8400-e29b-41d4-a716-446655440024', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440006', '770e8400-e29b-41d4-a716-446655440025', false),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440006', '770e8400-e29b-41d4-a716-446655440026', false),
  -- Graphics Card options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440007', '770e8400-e29b-41d4-a716-446655440027', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440007', '770e8400-e29b-41d4-a716-446655440028', false),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440007', '770e8400-e29b-41d4-a716-446655440029', false),
  -- Color options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440033', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440036', false),
  -- Warranty options
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440037', true),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440038', false),
  ('880e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440039', false);