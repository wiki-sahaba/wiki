export interface SubMenuItem {
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  icon: string;
  label: string;
  submenu?: SubMenuItem[];
  href?: string;
}

export const menus: MenuItem[] = [
  {
    id: 'muhammad',
    icon: 'DomeIcon',
    label: 'محمد رسول الله',
    submenu: [
      { label: 'نام و نسب', href: '#' },
      { label: 'زندگینامه', href: '#' },
      { label: 'معجزات', href: '#' },
      { label: 'همسران و فرزندان', href: '#' },
    ],
  },
  {
    id: 'mabadi',
    icon: 'BookIcon',
    label: 'مبادی و اعتقاد',
    submenu: [
      { label: 'توحید و خداشناسی', href: '#' },
      { label: 'نبوت و پیامبران', href: '#' },
      { label: 'معاد و قیامت', href: '#' },
    ],
  },
  {
    id: 'sahabe',
    icon: 'PeopleIcon',
    label: 'صحابه',
    submenu: [
      { label: 'خلفای راشدین', href: '#' },
      { label: 'مهاجرین و انصار', href: '#' },
      { label: 'صحابه مشهور', href: '#' },
    ],
  },
  {
    id: 'sahabeat',
    icon: 'WomanIcon',
    label: 'صحابیات',
    submenu: [
      { label: 'همسران پیامبر', href: '#' },
      { label: 'صحابیات برجسته', href: '#' },
    ],
  },
  {
    id: 'tabein',
    icon: 'PersonIcon',
    label: 'تابعین',
    submenu: [
      { label: 'تابعین مشهور', href: '#' },
      { label: 'طبقات تابعین', href: '#' },
    ],
  },
  {
    id: 'tabe-tabein',
    icon: 'PersonIcon',
    label: 'تبع تابعین',
    submenu: [
      { label: 'تبع تابعین مشهور', href: '#' },
      { label: 'طبقات تبع تابعین', href: '#' },
    ],
  },
  {
    id: 'select',
    icon: 'ListIcon',
    label: 'انتخاب اسم',
    submenu: [
      { label: 'اسم پسر', href: '#' },
      { label: 'اسم دختر', href: '#' },
    ],
  },
  {
    id: 'question-bank',
    icon: 'QuestionIcon',
    label: 'بانک سوالات',
    href: '#',
  },
  {
    id: 'terms',
    icon: 'ListIcon',
    label: 'اصطلاحات و اماکن',
    href: '#',
  },
  {
    id: 'sources',
    icon: 'BookIcon',
    label: 'منابع',
    href: '#',
  },
  {
    id: 'library',
    icon: 'BookIcon',
    label: 'کتابخانه تخصصی',
    href: '#',
  },
];
