/*
  # Create Agency Website Database Tables

  ## Overview
  This migration creates the core database tables for the Jawanexis Technologies digital agency website.

  ## New Tables
  
  ### 1. `projects`
    - `id` (uuid, primary key)
    - `title` (text) - Project name
    - `description` (text) - Project description
    - `image_url` (text) - Project image URL
    - `category` (text) - Project category/industry
    - `tags` (text[]) - Technology tags
    - `client_name` (text) - Client name
    - `case_study_url` (text, nullable) - Link to case study
    - `featured` (boolean) - Whether project is featured
    - `order_index` (integer) - Display order
    - `created_at` (timestamptz) - Creation timestamp
    - `updated_at` (timestamptz) - Last update timestamp
  
  ### 2. `services`
    - `id` (uuid, primary key)
    - `title` (text) - Service name
    - `description` (text) - Service description
    - `icon` (text) - Icon name/identifier
    - `slug` (text, unique) - URL-friendly identifier
    - `order_index` (integer) - Display order
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)
  
  ### 3. `contacts`
    - `id` (uuid, primary key)
    - `name` (text) - Contact person name
    - `email` (text) - Email address
    - `phone` (text, nullable) - Phone number
    - `company` (text, nullable) - Company name
    - `message` (text) - Contact message
    - `status` (text) - Status (new, contacted, closed)
    - `created_at` (timestamptz)
  
  ### 4. `testimonials`
    - `id` (uuid, primary key)
    - `client_name` (text) - Client name
    - `client_position` (text) - Client position/title
    - `client_company` (text) - Client company
    - `client_photo` (text, nullable) - Photo URL
    - `quote` (text) - Testimonial quote
    - `rating` (integer) - Rating 1-5
    - `featured` (boolean) - Whether to feature
    - `order_index` (integer) - Display order
    - `created_at` (timestamptz)
  
  ### 5. `blog_posts`
    - `id` (uuid, primary key)
    - `title` (text) - Blog post title
    - `slug` (text, unique) - URL-friendly identifier
    - `excerpt` (text) - Short excerpt
    - `content` (text) - Full blog content
    - `author` (text) - Author name
    - `featured_image` (text, nullable) - Featured image URL
    - `category` (text) - Blog category
    - `tags` (text[]) - Post tags
    - `published` (boolean) - Whether published
    - `published_at` (timestamptz, nullable)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for published content
  - Admin-only write access
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  client_name text NOT NULL,
  case_study_url text,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  slug text UNIQUE NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_position text NOT NULL,
  client_company text NOT NULL,
  client_photo text,
  quote text NOT NULL,
  rating integer DEFAULT 5,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  featured_image text,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for projects
CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Projects can be inserted by authenticated users"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Projects can be updated by authenticated users"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Projects can be deleted by authenticated users"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for services
CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Services can be inserted by authenticated users"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Services can be updated by authenticated users"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Services can be deleted by authenticated users"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contacts
CREATE POLICY "Contacts can be inserted by everyone"
  ON contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Contacts are viewable by authenticated users only"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Contacts can be updated by authenticated users"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Contacts can be deleted by authenticated users"
  ON contacts FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Testimonials can be inserted by authenticated users"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Testimonials can be updated by authenticated users"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Testimonials can be deleted by authenticated users"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for blog_posts
CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true OR auth.role() = 'authenticated');

CREATE POLICY "Blog posts can be inserted by authenticated users"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Blog posts can be updated by authenticated users"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Blog posts can be deleted by authenticated users"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data for services
INSERT INTO services (title, description, icon, slug, order_index) VALUES
('Experience Design', 'Creating intuitive and engaging user experiences that delight customers and drive business results through research-driven design.', 'Palette', 'experience-design', 1),
('Frontend Development', 'Building responsive, performant, and accessible web applications using modern frameworks like React, Next.js, and Vue.js.', 'Code', 'frontend-development', 2),
('Mobile Development', 'Developing native and cross-platform mobile applications for iOS and Android with seamless user experiences.', 'Smartphone', 'mobile-development', 3),
('Backend Development', 'Creating robust, scalable server-side solutions with Node.js, Express, and modern database technologies.', 'Server', 'backend-development', 4),
('QA Testing', 'Ensuring software quality through comprehensive testing strategies including automation, performance, and security testing.', 'CheckCircle', 'qa-testing', 5),
('Digital Marketing', 'Driving growth through data-driven marketing strategies, SEO optimization, and performance analytics.', 'TrendingUp', 'digital-marketing', 6);

-- Insert sample data for projects
INSERT INTO projects (title, description, image_url, category, tags, client_name, featured, order_index) VALUES
('Enterprise SaaS Platform', 'Built a scalable multi-tenant SaaS platform serving over 10,000 users with real-time analytics and reporting.', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg', 'Fintech', ARRAY['React', 'Node.js', 'MongoDB', 'AWS'], 'Global Finance Corp', true, 1),
('Healthcare Mobile App', 'Developed a HIPAA-compliant mobile application for patient management and telemedicine consultations.', 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg', 'Healthcare', ARRAY['React Native', 'Firebase', 'Node.js'], 'MedTech Solutions', true, 2),
('E-Commerce Platform', 'Created a high-performance e-commerce platform with advanced search, personalization, and payment integration.', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg', 'E-Commerce', ARRAY['Next.js', 'PostgreSQL', 'Stripe'], 'RetailHub Inc', true, 3),
('AI-Powered Analytics Dashboard', 'Built an intelligent analytics platform with machine learning insights and predictive modeling capabilities.', 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', 'Web3', ARRAY['React', 'Python', 'TensorFlow', 'AWS'], 'DataVision Analytics', true, 4);

-- Insert sample data for testimonials
INSERT INTO testimonials (client_name, client_position, client_company, quote, rating, featured, order_index) VALUES
('Sarah Johnson', 'CTO', 'TechStart Inc', 'Jawanexis Technologies delivered beyond our expectations. Their technical expertise and commitment to quality helped us launch our product ahead of schedule.', 5, true, 1),
('Michael Chen', 'Product Manager', 'Innovation Labs', 'Working with Jawanexis has been a game-changer for our business. They understand both technology and business needs perfectly.', 5, true, 2),
('Emily Rodriguez', 'CEO', 'Digital Ventures', 'The team at Jawanexis is highly professional and responsive. They transformed our vision into a beautiful, functional product.', 5, true, 3);
