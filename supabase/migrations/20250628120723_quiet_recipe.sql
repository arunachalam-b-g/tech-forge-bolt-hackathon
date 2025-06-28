/*
  # Fix RLS policies for orders table

  1. Security Updates
    - Update existing policies to properly handle both authenticated and guest orders
    - Ensure guest orders can be created with proper validation
    - Allow authenticated users to create orders for themselves
    - Maintain admin access for order management

  2. Policy Changes
    - Modify guest order insertion policy to be more permissive
    - Update user order creation policy to handle all scenarios
    - Keep existing admin and user view policies intact
*/

-- Drop existing policies to recreate them with proper permissions
DROP POLICY IF EXISTS "Guest orders are insertable" ON orders;
DROP POLICY IF EXISTS "Users can create orders" ON orders;

-- Create new policy for guest orders (anonymous users)
CREATE POLICY "Anonymous users can create guest orders"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (
    user_id IS NULL 
    AND guest_email IS NOT NULL 
    AND guest_email != ''
  );

-- Create new policy for authenticated users to create orders
CREATE POLICY "Authenticated users can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (auth.uid() = user_id) OR 
    (user_id IS NULL AND guest_email IS NOT NULL)
  );

-- Ensure public role can also insert guest orders
CREATE POLICY "Public users can create guest orders"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (
    user_id IS NULL 
    AND guest_email IS NOT NULL 
    AND guest_email != ''
  );