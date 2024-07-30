export const navLinks = [
    {
      label: "Главная",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Восстановить изображение",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.svg",
    },
    {
      label: "Сгенерировать окружение",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
    },
    {
      label: "Удалить объект",
      route: "/transformations/add/remove",
      icon: "/assets/icons/scan.svg",
    },
    {
      label: "Перекрасить объект",
      route: "/transformations/add/recolor",
      icon: "/assets/icons/filter.svg",
    },
    {
      label: "Удалить фон",
      route: "/transformations/add/removeBackground",
      icon: "/assets/icons/camera.svg",
    },
    {
      label: "Профиль",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Купить монеты",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Бесплатный тариф",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 20,
      inclusions: [
        {
          label: "20 бесплатных монет",
          isIncluded: true,
        },
        {
          label: "Базовый доступ к услугам",
          isIncluded: true,
        },
        {
          label: "Приоритетная поддержка клиентов",
          isIncluded: false,
        },
        {
          label: "Приоритетные обновления",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Про Пакет",
      icon: "/assets/icons/free-plan.svg",
      price: 1500,
      credits: 120,
      inclusions: [
        {
          label: "120 монет",
          isIncluded: true,
        },
        {
          label: "Полный доступ к услугам",
          isIncluded: true,
        },
        {
          label: "Приоритетная поддержка клиентов",
          isIncluded: true,
        },
        {
          label: "Приоритетные обновления",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 3,
      name: "Премиум Пакет",
      icon: "/assets/icons/free-plan.svg",
      price: 3500,
      credits: 2000,
      inclusions: [
        {
          label: "2000 монет",
          isIncluded: true,
        },
        {
          label: "Полный доступ к услугам",
          isIncluded: true,
        },
        {
          label: "Приоритетная поддержка клиентов",
          isIncluded: true,
        },
        {
          label: "Приоритетные обновления",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const transformationTypes = {
    restore: {
      type: "restore",
      title: "Восстановить изображение",
      subTitle: "Улучшайте качество изображений, удаляя шумы и дефекты",
      config: { restore: true },
      icon: "image.svg",
    },
    removeBackground: {
      type: "removeBackground",
      title: "Удалить фон",
      subTitle: "Удаляйте фон изображения с помощью искусственного интеллекта",
      config: { removeBackground: true },
      icon: "camera.svg",
    },
    fill: {
      type: "fill",
      title: "Сгенерировать окружение",
      subTitle: "Увеличьте размеры изображения с помощью искусственного интеллекта",
      config: { fillBackground: true },
      icon: "stars.svg",
    },
    remove: {
      type: "remove",
      title: "Удалить объект",
      subTitle: "Удаляйте объекты с изображений",
      config: {
        remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
    },
    recolor: {
      type: "recolor",
      title: "Перекрасить объект",
      subTitle: "Перекрашивайте объекты на изображениях",
      config: {
        recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
    },
  };
  
  export const aspectRatioOptions = {
    "1:1": {
      aspectRatio: "1:1",
      label: "Квадрат (1:1)",
      width: 1000,
      height: 1000,
    },
    "3:4": {
      aspectRatio: "3:4",
      label: "Стандартный портрет (3:4)",
      width: 1000,
      height: 1334,
    },
    "9:16": {
      aspectRatio: "9:16",
      label: "Портрет смартфона (9:16)",
      width: 1000,
      height: 1778,
    },
  };
  
  export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
  };
  
  export const creditFee = -1;