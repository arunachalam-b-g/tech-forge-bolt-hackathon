import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          category_id: string | null;
          name: string;
          description: string | null;
          base_price: number;
          image_url: string | null;
          is_active: boolean | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id?: string | null;
          name: string;
          description?: string | null;
          base_price: number;
          image_url?: string | null;
          is_active?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string | null;
          name?: string;
          description?: string | null;
          base_price?: number;
          image_url?: string | null;
          is_active?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      component_types: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          is_required: boolean | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          is_required?: boolean | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          is_required?: boolean | null;
          created_at?: string;
        };
      };
      components: {
        Row: {
          id: string;
          component_type_id: string | null;
          name: string;
          description: string | null;
          price: number;
          specifications: any;
          is_active: boolean | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          component_type_id?: string | null;
          name: string;
          description?: string | null;
          price: number;
          specifications?: any;
          is_active?: boolean | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          component_type_id?: string | null;
          name?: string;
          description?: string | null;
          price?: number;
          specifications?: any;
          is_active?: boolean | null;
          created_at?: string;
        };
      };
      product_components: {
        Row: {
          id: string;
          product_id: string | null;
          component_type_id: string | null;
          component_id: string | null;
          is_default: boolean | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id?: string | null;
          component_type_id?: string | null;
          component_id?: string | null;
          is_default?: boolean | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string | null;
          component_type_id?: string | null;
          component_id?: string | null;
          is_default?: boolean | null;
          created_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          avatar_url: string | null;
          is_admin: boolean | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          guest_email: string | null;
          status: string | null;
          total_amount: number;
          shipping_address: any;
          billing_address: any | null;
          payment_method: string | null;
          payment_status: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          guest_email?: string | null;
          status?: string | null;
          total_amount: number;
          shipping_address: any;
          billing_address?: any | null;
          payment_method?: string | null;
          payment_status?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          guest_email?: string | null;
          status?: string | null;
          total_amount?: number;
          shipping_address?: any;
          billing_address?: any | null;
          payment_method?: string | null;
          payment_status?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string | null;
          product_id: string | null;
          quantity: number;
          unit_price: number;
          total_price: number;
          configuration: any;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id?: string | null;
          product_id?: string | null;
          quantity?: number;
          unit_price: number;
          total_price: number;
          configuration?: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string | null;
          product_id?: string | null;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          configuration?: any;
          created_at?: string;
        };
      };
      configurations: {
        Row: {
          id: string;
          user_id: string | null;
          product_id: string | null;
          name: string;
          configuration: any;
          total_price: number;
          is_public: boolean | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          product_id?: string | null;
          name: string;
          configuration?: any;
          total_price: number;
          is_public?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          product_id?: string | null;
          name?: string;
          configuration?: any;
          total_price?: number;
          is_public?: boolean | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};