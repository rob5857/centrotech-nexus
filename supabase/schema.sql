-- CentroTech Nexus Database Schema
-- Execute this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clients Table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  address TEXT,
  city VARCHAR(100) NOT NULL,
  region VARCHAR(50) NOT NULL,
  business_type VARCHAR(100),
  plan_type VARCHAR(50) NOT NULL DEFAULT 'basic',
  health_score VARCHAR(50) DEFAULT 'good',
  monthly_value DECIMAL(10, 2) DEFAULT 0,
  total_revenue DECIMAL(10, 2) DEFAULT 0,
  client_since DATE DEFAULT CURRENT_DATE,
  last_visit DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Equipment Table
CREATE TABLE equipment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL,
  brand VARCHAR(100),
  model VARCHAR(100),
  serial_number VARCHAR(100),
  location VARCHAR(255),
  installation_date DATE,
  warranty_expiry DATE,
  status VARCHAR(50) DEFAULT 'operational',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Visits Table
CREATE TABLE visits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  technician_id UUID,
  visit_date DATE NOT NULL,
  purpose TEXT NOT NULL,
  findings TEXT,
  recommendations TEXT,
  duration_hours DECIMAL(5, 2),
  status VARCHAR(50) DEFAULT 'pending',
  follow_up_required BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Proposals Table
CREATE TABLE proposals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'draft',
  valid_until DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Proposal Services Table
CREATE TABLE proposal_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  proposal_id UUID REFERENCES proposals(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  quantity INTEGER DEFAULT 1,
  unit_price DECIMAL(10, 2) NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tickets Table
CREATE TABLE tickets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  priority VARCHAR(50) DEFAULT 'medium',
  status VARCHAR(50) DEFAULT 'open',
  assigned_to UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Opportunities Table
CREATE TABLE ai_opportunities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  estimated_value DECIMAL(10, 2) DEFAULT 0,
  time_savings_hours INTEGER DEFAULT 0,
  impact_score INTEGER DEFAULT 5,
  status VARCHAR(50) DEFAULT 'identified',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Network Topology Table
CREATE TABLE network_topology (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  diagram_data JSONB,
  devices_count INTEGER DEFAULT 0,
  last_updated DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Maintenance Schedule Table
CREATE TABLE maintenance_schedule (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  frequency VARCHAR(50) NOT NULL,
  next_date DATE NOT NULL,
  last_completed DATE,
  assigned_to UUID,
  status VARCHAR(50) DEFAULT 'scheduled',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_plan_type ON clients(plan_type);
CREATE INDEX idx_equipment_client_id ON equipment(client_id);
CREATE INDEX idx_visits_client_id ON visits(client_id);
CREATE INDEX idx_visits_date ON visits(visit_date);
CREATE INDEX idx_proposals_client_id ON proposals(client_id);
CREATE INDEX idx_proposals_status ON proposals(status);
CREATE INDEX idx_tickets_client_id ON tickets(client_id);
CREATE INDEX idx_tickets_status ON tickets(status);
CREATE INDEX idx_ai_opportunities_client_id ON ai_opportunities(client_id);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposal_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE network_topology ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_schedule ENABLE ROW LEVEL SECURITY;

-- Consultation Requests Table (from landing page)
CREATE TABLE consultation_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255),
  service VARCHAR(100) NOT NULL,
  message TEXT,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Messages Table (from landing page)
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for contact forms
CREATE INDEX idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX idx_consultation_requests_status ON consultation_requests(status);
CREATE INDEX idx_consultation_requests_created_at ON consultation_requests(created_at);
CREATE INDEX idx_contact_messages_email ON contact_messages(email);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at);

-- Create policies (allow all for authenticated users - adjust as needed)
CREATE POLICY "Allow all for authenticated users" ON clients FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON equipment FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON visits FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON proposals FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON proposal_services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON tickets FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON ai_opportunities FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON network_topology FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow all for authenticated users" ON maintenance_schedule FOR ALL USING (auth.role() = 'authenticated');

-- Enable RLS for contact forms
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public insert for contact forms (anyone can submit)
CREATE POLICY "Allow public insert" ON consultation_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert" ON contact_messages FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read all
CREATE POLICY "Allow authenticated read" ON consultation_requests FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated read" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');

