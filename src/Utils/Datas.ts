import {
  ProductType, ArticleType, MainMenuType, BasketType, SearchItemProps,
  ClothesSizeType, ClothesColorType, SortType, GroupType, ImageType, OrderType
} from './Types'

const ProductData: ProductType[] = [
  { id: 1, code: '11', category: 1, title: 'پالتو پانچ پشمی سایزبزرگ ', image: '../../public/Image/Products/11/11.jpg', price: 985000, size: [{ id: 1, title: '50' }, { id: 2, title: '52' }], color: [{ id: 1, title: 'آبی' }, { id: 2, title: 'قرمز' }] },
  { id: 2, code: '12', category: 1, title: 'پالتو شنل ترک یقه انگلیسی', image: '../../public/Image/Products/12/12.jpg', price: 864000, off:6, size: [{ id: 2, title: '52' }, { id: 3, title: '54' }], color: [{ id: 1, title: 'آبی' }, { id: 3, title: 'صورتی' }] },
  { id: 3, code: '21', category: 9, title: 'مانتو سوییت چهارخونه سایزبزرگ', image: '../../public/Image/Products/21/21.jpg', price: 540000, off:15, size: [{ id: 1, title: '50' }], color: [{ id: 4, title: 'بنفش' }, { id: 2, title: 'قرمز' }] },
  { id: 4, code: '22', category: 9, title: 'مانتو سوییت خرجکار چرم', image: '../../public/Image/Products/22/22.jpg', price: 660000, size: [{ id: 5, title: '58' }, { id: 6, title: '60' }], color: [{ id: 1, title: 'آبی' }, { id: 2, title: 'قرمز' }] },
  { id: 5, code: '31', category: 4, title: 'شلوار راسته طرح جین سایزبزرگ', image: '../../public/Image/Products/31/31.jpg', price: 300000, size: [{ id: 2, title: '52' }, { id: 3, title: '54' }], color: [{ id: 1, title: 'آبی' }, { id: 5, title: 'زرد' }] },
  { id: 6, code: '32', category: 4, title: 'شلوار سورن کمرگندار دمپاگشاد', image: '../../public/Image/Products/32/32.jpg', price: 250000, off:25, size: [{ id: 6, title: '60' }, { id: 7, title: '62' }], color: [{ id: 2, title: 'قرمز' }, { id: 3, title: 'صورتی' }] },
]

const BasketData: BasketType[] = [
  { id: 1, code: '11', title: 'پالتو پانچ پشمی سایزبزرگ ', count: 2, image: '../../public/Image/Products/11/11.jpg', price: 985000, size: [{ id: 1, title: '50' }], color: [{ id: 2, title: 'قرمز' }] },
  { id: 2, code: '12', title: 'پالتو شنل ترک یقه انگلیسی', count: 1, image: '../../public/Image/Products/12/12.jpg', price: 864000, off:6, size: [{ id: 2, title: '52' }], color: [{ id: 1, title: 'آبی' }] },
  { id: 3, code: '21', title: 'مانتو سوییت چهارخونه سایزبزرگ', count: 3, image: '../../public/Image/Products/21/21.jpg', price: 540000, off:15, size: [{ id: 1, title: '56' }], color: [{ id: 4, title: 'بنفش' }] },
  { id: 4, code: '22', title: 'مانتو سوییت خرجکار چرم', count: 4, image: '../../public/Image/Products/22/22.jpg', price: 660000, size: [{ id: 1, title: '58' }], color: [{ id: 4, title: 'بنفش' }] },
]
const FavoriteData: SearchItemProps[] = [
  { id: 5, code: '31', title: 'شلوار راسته طرح جین سایزبزرگ', price: 50 },
  { id: 6, code: '32', title: 'شلوار سورن کمرگندار دمپاگشاد', price: 70 },
]

const ImageData:ImageType[] = [
  {id:1, idProduct:1, image:'../../public/Image/Products/11/11.jpg'},
  {id:2, idProduct:1, image:'../../public/Image/Products/11/11-2.jpg'},
  {id:3, idProduct:1, image:'../../public/Image/Products/11/11-3.jpg'},
  {id:4, idProduct:2, image:'../../public/Image/Products/12/12.jpg'},
  {id:5, idProduct:2, image:'../../public/Image/Products/12/12-2.jpg'},
  {id:6, idProduct:2, image:'../../public/Image/Products/12/12-3.jpg'},
  {id:7, idProduct:3, image:'../../public/Image/Products/21/21.jpg'},
  {id:8, idProduct:3, image:'../../public/Image/Products/21/21-2.jpg'},
  {id:9, idProduct:3, image:'../../public/Image/Products/21/21-2.jpg'},
  {id:10, idProduct:4, image:'../../public/Image/Products/22/22.jpg'},
  {id:11, idProduct:4, image:'../../public/Image/Products/22/22-2.jpg'},
  {id:12, idProduct:4, image:'../../public/Image/Products/22/22-3.jpg'},
  {id:13, idProduct:5, image:'../../public/Image/Products/31/31.jpg'},
  {id:14, idProduct:5, image:'../../public/Image/Products/31/31-2.jpg'},
  {id:15, idProduct:5, image:'../../public/Image/Products/31/31-3.jpg'},
  {id:16, idProduct:6, image:'../../public/Image/Products/32/32.jpg'},
  {id:17, idProduct:6, image:'../../public/Image/Products/32/32-2.jpg'},
  {id:18, idProduct:6, image:'../../public/Image/Products/32/32-3.jpg'},
]

const ArticleData: ArticleType[] = [
  { id: 1, title: 'پارچه پشمی موهر چیست و چه کاربردهایی دارد؟', createDate: '1402/01/01', studyTime: '5:30', image: '../../public/Image/articles/1.webp', context: 'همیشه در شروع فصل سرما به دنبال خرید لباس های زمستانی هستیم. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده م.' },
  { id: 2, title: 'آشنایی با پارچه تریکو', createDate: '1402/01/01', studyTime: '5:30', image: '../../public/Image/articles/2.jpg', context: 'همیشه در شروع فصل سرما به دنبال خرید لباس های زمستانی هستیم. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده م.' },
  { id: 3, title: 'پارچه جین با کاربردهای متنوع و همیشه مد', createDate: '1402/01/01', studyTime: '5:30', image: '../../public/Image/articles/3.jpg', context: 'همیشه در شروع فصل سرما به دنبال خرید لباس های زمستانی هستیم. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده م.' },
  { id: 4, title: 'پارچه تنسل و آشنایی با ویژگی‌ها و روند تولید آن', createDate: '1402/01/01', studyTime: '5:30', image: '../../public/Image/articles/4.jpg', context: 'همیشه در شروع فصل سرما به دنبال خرید لباس های زمستانی هستیم. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده م.' },
  { id: 5, title: 'پارچه کرسپو چیست؟', createDate: '1402/01/01', studyTime: '5:30', image: '../../public/Image/articles/5.webp', context: 'همیشه در شروع فصل سرما به دنبال خرید لباس های زمستانی هستیم. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده م.' },
  { id: 6, title: 'پارچه حریر چیست و چه کاربردهایی دارد؟', createDate: '1402/01/01', studyTime: '5:30', image: '../../public/Image/articles/6.jpg', context: 'همیشه در شروع فصل سرما به دنبال خرید لباس های زمستانی هستیم. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده. پارچه‌هایی که در لباس های گرم استفاده م.' },
]


const MenuData: MainMenuType[] = [
  { id:1, title: 'صفحه اصلی', href: '/' },
  {
    id:2, title: 'محصولات', submenus: [
      { id:1, title: 'لباس', item: [{ id:1, title: 'پالتو سایز بزرگ', href: '' },{ id:2, title: 'تونیک و شومیز', href: '' },{ id:3, title: 'زیر سارافون', href: '' },{ id:4, title: 'شلوار سایزبزرگ', href: '' },{ id:5, title: 'کاپشن سایز بزرگ زنانه', href: '' },{ id:6, title: 'لباس سایز بزرگ مجلسی', href: '' },{ id:7, title: 'لباس مجلسی', href: '' },{ id:8, title: 'مانتو اسپرت', href: '' },{ id:9, title: 'مانتو سایز بزرگ', href: '' },] },
      { id:2, title: 'لباس زیر و راحتی', item: [{ id:10, title: 'سوتین', href: '' },{ id:11, title: 'شورت', href: '' },{ id:12, title: 'ست شورت و سوتین', href: '' },{ id:13, title: 'بادی', href: '' },{ id:14, title: 'لباس راحتی', href: '' },{ id:15, title: 'لباس خواب', href: '' },{ id:16, title: 'گن', href: '' },{ id:17, title: 'مایو', href: '' },] },
      { id:3, title: 'کیف و کفش', item: [{ id:18, title: 'بوت و نیم بوت', href: '' },{ id:19, title: 'کفش تخت و کژوال', href: '' },{ id:20, title: 'کفش ورزشی', href: '' },{ id:21, title: 'کفش مجلسی و پاشنه بلند', href: '' },{ id:22, title: 'کفش سایز یزرگ', href: '' },{ id:23, title: 'کیف', href: '' },{ id:24, title: 'کیف مجلسی', href: '' },{ id:25, title: 'کیف پول', href: '' },] }
    ], href: '/products'
  },
  { id:3, title: 'راهنمای سایزبندی', href: 'size' },
  { id:4, title: 'مقالات', href: 'articles' },
  { id:5, title: 'درباره ما', href: 'about-us' },
  { id:6, title: 'تماس با ما', href: 'contact-us' },
]

const SizeData: ClothesSizeType[] = [
  { id: 1, title: '50' },
  { id: 2, title: '52' },
  { id: 3, title: '54' },
  { id: 5, title: '58' },
  { id: 6, title: '60' },
  { id: 7, title: '62' },
]

const ColorData: ClothesColorType[] = [
  { id: 1, title: 'آبی' },
  { id: 2, title: 'قرمز' },
  { id: 3, title: 'صورتی' },
  { id: 4, title: 'بنفش' },
  { id: 5, title: 'زرد' },
]

const SortData: SortType[] = [
  { id: 1, value: "popular", title: 'مرتب سازی براساس محبوبترین' },
  { id: 2, value: "point", title: 'مرتب سازی براساس امتیاز' },
  { id: 3, value: "latest", title: 'مرتب سازی براساس آخرین' },
  { id: 4, value: "expensive", title: 'مرتب سازی براساس گرانترین' },
  { id: 5, value: "cheapest", title: 'مرتب سازی براساس ارزانترین' },
]

const GroupData: GroupType[] = [
  { id: 1, title: 'پالتو سایز بزرگ' },
  { id: 2, title: 'تونیک و شومیز' },
  { id: 3, title: 'دسته بندی نشده' },
  { id: 4, title: 'زیر سارافون' },
  { id: 5, title: 'ست لباس راحتی' },
  { id: 6, title: 'شلوار سایزبزرگ' },
  { id: 7, title: 'کاپشن سایز بزرگ زنانه', subGroup: [{ id: 1, title: 'پافر' }] },
  { id: 8, title: 'کفش' },
  { id: 9, title: 'کفش سایز بزرگ' },
  { id: 10, title: 'کیف زنانه' },
  { id: 11, title: 'لباس زیر' },
  { id: 12, title: 'لباس سایز بزرگ مجلسی' },
  { id: 13, title: 'لباس مجلسی' },
  { id: 14, title: 'مانتو اسپرت' },
  {
    id: 15, title: 'مانتو سایز بزرگ',
    subGroup: [
      { id: 1, title: 'پالتو' },
      { id: 1, title: 'مانتو پاییزه سایزبزرگ' },
      { id: 1, title: 'مانتو سایزبزرگ تابستانه' }
    ]
  },
]

const OrderData:OrderType[] = [
  {id:1, orderCode:'23765', orderDate:'06/11/1401', status:'تحویل شده', price:9800000, off:340000},
  {id:2, orderCode:'87543', orderDate:'08/12/1401', status:'تحویل شده', price:700000, off:30000},
  {id:3, orderCode:'09755', orderDate:'06/06/1402', status:'تحویل شده', price:6500000},
  {id:4, orderCode:'12432', orderDate:'15/10/1402', status:'جاری', price:9000000, off:500000},
]


export { ProductData, ArticleData, MenuData, BasketData, FavoriteData, SizeData, ColorData, SortData, GroupData, 
  ImageData, OrderData }