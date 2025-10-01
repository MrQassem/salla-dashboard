// Mock data for Salla sandbox integration
export const mockProducts = [
  {
    id: 'prod_001',
    title: 'Premium Leather Backpack',
    titleAr: 'حقيبة ظهر جلدية فاخرة',
    description: 'High-quality leather backpack with laptop compartment',
    descriptionAr: 'حقيبة ظهر جلدية عالية الجودة مع مكان للكمبيوتر المحمول',
    price: 299.99,
    stock: 5,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    sku: 'LBP-001',
    sales30d: 45,
    revenue30d: 13499.55,
    healthScore: 72,
    issues: ['Low stock', 'Image quality could improve']
  },
  {
    id: 'prod_002',
    title: 'Wireless Noise-Cancelling Headphones',
    titleAr: 'سماعات لاسلكية بخاصية إلغاء الضوضاء',
    description: 'Premium audio experience with active noise cancellation',
    descriptionAr: 'تجربة صوتية متميزة مع خاصية إلغاء الضوضاء النشطة',
    price: 199.99,
    stock: 124,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    sku: 'WNC-002',
    sales30d: 156,
    revenue30d: 31198.44,
    healthScore: 95,
    issues: []
  },
  {
    id: 'prod_003',
    title: 'Smart Watch Pro',
    titleAr: 'ساعة ذكية برو',
    description: 'Advanced fitness tracking and health monitoring',
    descriptionAr: 'تتبع متقدم للياقة البدنية ومراقبة الصحة',
    price: 349.99,
    stock: 0,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    sku: 'SWP-003',
    sales30d: 89,
    revenue30d: 31149.11,
    healthScore: 45,
    issues: ['Out of stock', 'Missing description details']
  },
  {
    id: 'prod_004',
    title: 'Minimalist Desk Lamp',
    titleAr: 'مصباح مكتب بسيط',
    description: 'LED desk lamp with adjustable brightness and color temperature',
    descriptionAr: 'مصباح مكتب LED بسطوع ودرجة حرارة لون قابلة للتعديل',
    price: 79.99,
    stock: 234,
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400',
    sku: 'MDL-004',
    sales30d: 67,
    revenue30d: 5359.33,
    healthScore: 88,
    issues: []
  },
  {
    id: 'prod_005',
    title: 'Organic Cotton T-Shirt',
    titleAr: 'تي شيرت قطن عضوي',
    description: 'Comfortable and sustainable everyday wear',
    descriptionAr: 'ملابس يومية مريحة ومستدامة',
    price: 29.99,
    stock: 456,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    sku: 'OCT-005',
    sales30d: 312,
    revenue30d: 9356.88,
    healthScore: 82,
    issues: ['Low margin']
  },
  {
    id: 'prod_006',
    title: 'Stainless Steel Water Bottle',
    titleAr: 'زجاجة ماء من الفولاذ المقاوم للصدأ',
    description: 'Insulated water bottle keeps drinks cold for 24 hours',
    descriptionAr: 'زجاجة ماء معزولة تحافظ على برودة المشروبات لمدة 24 ساعة',
    price: 34.99,
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    sku: 'SWB-006',
    sales30d: 98,
    revenue30d: 3429.02,
    healthScore: 78,
    issues: ['Low stock', 'Need better product photos']
  }
];

export const mockCustomers = [
  {
    id: 'cust_001',
    name: 'Ahmed Hassan',
    nameAr: 'أحمد حسن',
    email: 'ahmed.hassan@example.com',
    phone: '+966 50 123 4567',
    totalOrders: 12,
    totalSpent: 2847.89,
    lastOrderDate: '2024-09-28',
    segment: 'VIP',
    churnRisk: 'low',
    acquisitionChannel: 'instagram'
  },
  {
    id: 'cust_002',
    name: 'Sara Al-Otaibi',
    nameAr: 'سارة العتيبي',
    email: 'sara.otaibi@example.com',
    phone: '+966 55 234 5678',
    totalOrders: 3,
    totalSpent: 449.97,
    lastOrderDate: '2024-09-15',
    segment: 'Regular',
    churnRisk: 'medium',
    acquisitionChannel: 'google'
  },
  {
    id: 'cust_003',
    name: 'Mohammed Al-Rashid',
    nameAr: 'محمد الراشد',
    email: 'mohammed.r@example.com',
    phone: '+966 54 345 6789',
    totalOrders: 1,
    totalSpent: 199.99,
    lastOrderDate: '2024-08-22',
    segment: 'New',
    churnRisk: 'high',
    acquisitionChannel: 'facebook'
  },
  {
    id: 'cust_004',
    name: 'Fatima Al-Dosari',
    nameAr: 'فاطمة الدوسري',
    email: 'fatima.d@example.com',
    phone: '+966 56 456 7890',
    totalOrders: 8,
    totalSpent: 1699.92,
    lastOrderDate: '2024-09-26',
    segment: 'Loyal',
    churnRisk: 'low',
    acquisitionChannel: 'direct'
  },
  {
    id: 'cust_005',
    name: 'Khalid Al-Mutairi',
    nameAr: 'خالد المطيري',
    email: 'khalid.m@example.com',
    phone: '+966 53 567 8901',
    totalOrders: 5,
    totalSpent: 874.95,
    lastOrderDate: '2024-09-20',
    segment: 'Regular',
    churnRisk: 'low',
    acquisitionChannel: 'snapchat'
  }
];

export const mockOrders = [
  {
    id: 'ord_001',
    orderNumber: '#2024-1847',
    customerId: 'cust_001',
    customerName: 'Ahmed Hassan',
    date: '2024-09-28T14:23:00',
    status: 'delivered',
    items: [
      { productId: 'prod_002', title: 'Wireless Headphones', quantity: 1, price: 199.99 },
      { productId: 'prod_004', title: 'Desk Lamp', quantity: 2, price: 79.99 }
    ],
    total: 359.97,
    channel: 'instagram'
  },
  {
    id: 'ord_002',
    orderNumber: '#2024-1846',
    customerId: 'cust_004',
    customerName: 'Fatima Al-Dosari',
    date: '2024-09-26T11:15:00',
    status: 'shipped',
    items: [
      { productId: 'prod_001', title: 'Leather Backpack', quantity: 1, price: 299.99 }
    ],
    total: 299.99,
    channel: 'direct'
  },
  {
    id: 'ord_003',
    orderNumber: '#2024-1845',
    customerId: 'cust_005',
    customerName: 'Khalid Al-Mutairi',
    date: '2024-09-20T16:45:00',
    status: 'processing',
    items: [
      { productId: 'prod_005', title: 'Cotton T-Shirt', quantity: 3, price: 29.99 },
      { productId: 'prod_006', title: 'Water Bottle', quantity: 2, price: 34.99 }
    ],
    total: 159.95,
    channel: 'snapchat'
  },
  {
    id: 'ord_004',
    orderNumber: '#2024-1844',
    customerId: 'cust_002',
    customerName: 'Sara Al-Otaibi',
    date: '2024-09-15T09:30:00',
    status: 'cancelled',
    items: [
      { productId: 'prod_003', title: 'Smart Watch Pro', quantity: 1, price: 349.99 }
    ],
    total: 349.99,
    channel: 'google'
  },
  {
    id: 'ord_005',
    orderNumber: '#2024-1843',
    customerId: 'cust_001',
    customerName: 'Ahmed Hassan',
    date: '2024-09-10T13:20:00',
    status: 'delivered',
    items: [
      { productId: 'prod_002', title: 'Wireless Headphones', quantity: 1, price: 199.99 },
      { productId: 'prod_005', title: 'Cotton T-Shirt', quantity: 2, price: 29.99 }
    ],
    total: 259.97,
    channel: 'instagram'
  }
];

export const mockAbandonedCarts = [
  {
    id: 'cart_001',
    customerId: 'cust_002',
    customerName: 'Sara Al-Otaibi',
    items: [
      { productId: 'prod_003', title: 'Smart Watch Pro', quantity: 1, price: 349.99 }
    ],
    total: 349.99,
    abandonedAt: '2024-09-27T10:15:00',
    recoveryPotential: 'high'
  },
  {
    id: 'cart_002',
    customerId: 'cust_003',
    customerName: 'Mohammed Al-Rashid',
    items: [
      { productId: 'prod_001', title: 'Leather Backpack', quantity: 1, price: 299.99 },
      { productId: 'prod_006', title: 'Water Bottle', quantity: 1, price: 34.99 }
    ],
    total: 334.98,
    abandonedAt: '2024-09-25T18:45:00',
    recoveryPotential: 'medium'
  }
];

export const mockInsights = [
  {
    id: 'insight_001',
    type: 'opportunity',
    title: 'Top Performer: Wireless Headphones',
    titleAr: 'الأفضل أداءً: السماعات اللاسلكية',
    description: 'WNC-002 generated SAR 31,198 in 30 days. Consider increasing stock and promoting similar products.',
    descriptionAr: 'حقق المنتج WNC-002 إيرادات 31,198 ريال في 30 يوماً. فكر في زيادة المخزون والترويج لمنتجات مشابهة.',
    impact: 'high',
    priority: 1
  },
  {
    id: 'insight_002',
    type: 'warning',
    title: 'Critical Stock Alert',
    titleAr: 'تنبيه مخزون حرج',
    description: 'Smart Watch Pro is out of stock. Lost 12 potential sales in the last week.',
    descriptionAr: 'ساعة ذكية برو نفذت من المخزون. خسرنا 12 عملية بيع محتملة في الأسبوع الماضي.',
    impact: 'critical',
    priority: 1
  },
  {
    id: 'insight_003',
    type: 'warning',
    title: 'Low Stock: Premium Backpack',
    titleAr: 'مخزون منخفض: حقيبة فاخرة',
    description: 'Only 5 units left. Reorder needed to avoid stockout.',
    descriptionAr: 'تبقى 5 وحدات فقط. يلزم إعادة الطلب لتجنب نفاد المخزون.',
    impact: 'high',
    priority: 2
  },
  {
    id: 'insight_004',
    type: 'opportunity',
    title: 'Abandoned Cart Recovery',
    titleAr: 'استعادة سلة التسوق المهجورة',
    description: 'SAR 684.97 in abandoned carts. Send recovery emails to win back 30-40%.',
    descriptionAr: '684.97 ريال في سلات تسوق مهجورة. أرسل رسائل استعادة لكسب 30-40٪.',
    impact: 'medium',
    priority: 3
  },
  {
    id: 'insight_005',
    type: 'info',
    title: 'Instagram Driving 38% of Sales',
    titleAr: 'إنستجرام يحقق 38٪ من المبيعات',
    description: 'Instagram is your top channel. Double down on social media ads.',
    descriptionAr: 'إنستجرام هو قناتك الأفضل. ركز أكثر على إعلانات وسائل التواصل.',
    impact: 'medium',
    priority: 4
  },
  {
    id: 'insight_006',
    type: 'warning',
    title: 'Churn Risk: 3 Customers',
    titleAr: 'خطر فقدان: 3 عملاء',
    description: '3 customers haven\'t ordered in 45+ days. Send win-back campaign.',
    descriptionAr: '3 عملاء لم يطلبوا منذ 45+ يوماً. أرسل حملة استعادة.',
    impact: 'medium',
    priority: 5
  }
];

export const mockAreasToImprove = [
  {
    id: 'improve_001',
    title: 'Restock Critical Products',
    titleAr: 'إعادة تخزين المنتجات الحرجة',
    description: 'Smart Watch Pro out of stock, Leather Backpack low (5 units)',
    descriptionAr: 'ساعة ذكية برو نفذت، حقيبة جلدية منخفضة (5 وحدات)',
    impact: 10,
    effort: 2,
    score: 5.0,
    actions: ['Order 50+ Smart Watch Pro units', 'Order 25+ Leather Backpack units']
  },
  {
    id: 'improve_002',
    title: 'Launch Abandoned Cart Campaign',
    titleAr: 'إطلاق حملة سلة مهجورة',
    description: 'SAR 684.97 recoverable from 2 abandoned carts',
    descriptionAr: '684.97 ريال قابلة للاستعادة من سلتي تسوق مهجورتين',
    impact: 7,
    effort: 3,
    score: 2.33,
    actions: ['Send personalized recovery emails', 'Offer 10% discount code', 'Set up automated cart reminders']
  },
  {
    id: 'improve_003',
    title: 'Improve Product Content Quality',
    titleAr: 'تحسين جودة محتوى المنتج',
    description: '3 products have quality issues in images or descriptions',
    descriptionAr: '3 منتجات لديها مشاكل جودة في الصور أو الأوصاف',
    impact: 6,
    effort: 5,
    score: 1.2,
    actions: ['Update product photos for LBP-001 and SWB-006', 'Enhance description for SWP-003', 'Add lifestyle images']
  },
  {
    id: 'improve_004',
    title: 'Win-Back Churning Customers',
    titleAr: 'استعادة العملاء المفقودين',
    description: '3 customers at risk (no orders in 45+ days)',
    descriptionAr: '3 عملاء في خطر (لا طلبات منذ 45+ يوماً)',
    impact: 5,
    effort: 3,
    score: 1.67,
    actions: ['Send personalized win-back offers', 'Offer exclusive VIP discount', 'Survey to understand issues']
  }
];

// Chart data
export const mockRevenueData = [
  { date: '2024-09-01', revenue: 4532, aov: 156 },
  { date: '2024-09-05', revenue: 5243, aov: 168 },
  { date: '2024-09-10', revenue: 6891, aov: 172 },
  { date: '2024-09-15', revenue: 7234, aov: 165 },
  { date: '2024-09-20', revenue: 8123, aov: 178 },
  { date: '2024-09-25', revenue: 9456, aov: 182 },
  { date: '2024-09-28', revenue: 10234, aov: 185 }
];

export const mockChannelData = [
  { channel: 'Instagram', value: 38, revenue: 38900 },
  { channel: 'Direct', value: 25, revenue: 25600 },
  { channel: 'Google', value: 18, revenue: 18400 },
  { channel: 'Facebook', value: 12, revenue: 12300 },
  { channel: 'Snapchat', value: 7, revenue: 7200 }
];

export const mockStoreSettings = {
  name: 'Premium Lifestyle Store',
  nameAr: 'متجر نمط الحياة الفاخر',
  currency: 'SAR',
  timezone: 'Asia/Riyadh',
  language: 'ar',
  domain: 'premium-lifestyle.salla.sa'
};

// API simulation functions
export const fetchProducts = () =>
  new Promise(resolve => setTimeout(() => resolve(mockProducts), 800));

export const fetchCustomers = () =>
  new Promise(resolve => setTimeout(() => resolve(mockCustomers), 800));

export const fetchOrders = () =>
  new Promise(resolve => setTimeout(() => resolve(mockOrders), 800));

export const fetchInsights = () =>
  new Promise(resolve => setTimeout(() => resolve(mockInsights), 800));

export const fetchAreasToImprove = () =>
  new Promise(resolve => setTimeout(() => resolve(mockAreasToImprove), 800));

export const fetchAbandonedCarts = () =>
  new Promise(resolve => setTimeout(() => resolve(mockAbandonedCarts), 800));

// AI Suggestions API (to be wired to OpenAI)
export const getAISuggestions = async (context) => {
  // Mock response - replace with actual OpenAI API call
  return new Promise(resolve => setTimeout(() => resolve({
    suggestions: [
      {
        id: 'ai_001',
        type: 'product_copy',
        title: 'Optimize Smart Watch Product Page',
        description: 'Enhance product description with emotional benefits and technical specs',
        recommendations: [
          'Add headline: "Track Every Beat, Master Every Goal"',
          'Include 5 key features with icons: Heart Rate, Sleep Tracking, 50m Water Resistant, 7-Day Battery, GPS',
          'Add urgency: "Limited stock - Back in 3 days"',
          'Create comparison table with competitor models'
        ],
        estimatedImpact: 'Could increase conversion by 15-20%',
        applyAction: 'update_product_description',
        targetId: 'prod_003'
      },
      {
        id: 'ai_002',
        type: 'pricing',
        title: 'Bundle Opportunity: Tech Essentials',
        description: 'Create a bundle to increase AOV',
        recommendations: [
          'Bundle: Wireless Headphones + Smart Watch + Water Bottle',
          'Individual price: SAR 584.97',
          'Bundle price: SAR 499.99 (15% discount)',
          'Add badge: "Save SAR 84.98"',
          'Promote on homepage and Instagram'
        ],
        estimatedImpact: 'Could generate SAR 12,000+ additional monthly revenue',
        applyAction: 'create_bundle',
        targetId: 'bundle_tech_001'
      },
      {
        id: 'ai_003',
        type: 'email_campaign',
        title: 'Abandoned Cart: Sara Al-Otaibi',
        description: 'Personalized recovery email sequence',
        recommendations: [
          'Email 1 (1 hour): "Forgot something? Your Smart Watch is waiting"',
          'Email 2 (24 hours): "Here\'s 10% off to complete your order"',
          'Email 3 (72 hours): "Last chance: Free shipping on your Smart Watch"',
          'Use dynamic product images and customer name',
          'Add urgency countdown timer'
        ],
        estimatedImpact: '35-45% recovery rate = SAR 122-157',
        applyAction: 'send_email_campaign',
        targetId: 'cart_001'
      },
      {
        id: 'ai_004',
        type: 'segmentation',
        title: 'VIP Customer Exclusive Program',
        description: 'Reward top 20% customers to increase retention',
        recommendations: [
          'Create "Elite Circle" tier for customers with SAR 2,000+ lifetime value',
          'Benefits: Early access to new products, 15% discount, free shipping, birthday gift',
          'Send personalized invitation to Ahmed Hassan and Fatima Al-Dosari',
          'Automate tier upgrades based on spend thresholds'
        ],
        estimatedImpact: 'Could reduce churn by 40% and increase repeat rate by 25%',
        applyAction: 'create_loyalty_tier',
        targetId: 'loyalty_vip'
      },
      {
        id: 'ai_005',
        type: 'inventory',
        title: 'Smart Reorder Algorithm',
        description: 'Prevent stockouts with predictive ordering',
        recommendations: [
          'Set reorder point: When stock < 15 units or < 7 days of sales',
          'Smart Watch Pro: Order 75 units immediately',
          'Leather Backpack: Order 30 units within 3 days',
          'Water Bottle: Order 25 units within 7 days',
          'Enable auto-reorder for top 10 SKUs'
        ],
        estimatedImpact: 'Prevent SAR 15,000+ monthly revenue loss from stockouts',
        applyAction: 'configure_auto_reorder',
        targetId: 'inventory_management'
      }
    ],
    generatedAt: new Date().toISOString()
  }), 1500));
};
