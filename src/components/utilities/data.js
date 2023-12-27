const productos = [
  {
    id: "lwr123",
    nombre: "Incubadora Neonatal COMEN B6",
    descripcion: "Las incubadoras COMEN B6 proporcionan el ambiente adecuado para el desarrollo de bebés prematuros, asegurando su madurez en un ambiente seguro. Pueden incorporar un sistema de monitorio de parámetros vitales del paciente. Permiten a médicos trabajar con comodidad, gracias a su diseño ergonómico y su tecnología de vanguardia, garantizando el mejor cuidado.",
    stock: 3,
    precio: 9000,
    imagen: "/img/incubadora_b6.jpg",
    categoria: "incubadoras"
  },
  {
    id: "ytx329",
    nombre: "Incubadora Neonatal ATOM Incu i",
    descripcion: "La Incu i es una Incubadora destinada a recién nacidos y prematuros. Su principal objetivo es regular la temperatura en los casos de hipotermia neonatal; observar y examinar a los recién nacidos en la sala de cuidados neonatales; prevenir el descenso de la temperatura corporal y el cuidado intensivo pre y posoperatorio en los casos de cirugía neonatal. Esta incubadora tiene la capacidad de regular la temperatura cutánea del recién nacido como la del aire. También cuenta con controles de humedad.",
    stock: 2,
    precio: 9500,
    imagen: "/img/incubadora_incu_i_atom.jpg",
    categoria: "incubadoras"
  },
  {
    id: "fwm522",
    nombre: "Incubadora Neonatal ATOM Air Incu i",
    descripcion: "La Air Incu i es una incubadora destinada a recién nacidos y prematuros. Sus principales objetivos son regular la temperatura en los casos de hipotermia neonatal; observar y examinar a los recién nacidos en la sala de cuidados neonatales; prevenir el descenso de la temperatura corporal y el cuidado intensivo pre y posoperatorio en los casos de cirugía neonatal. Esta incubadora tiene la capacidad de regular tanto la temperatura cutánea del recién nacido como la del aire. También cuenta con controles de humedad.",
    stock: 2,
    precio: 10500,
    imagen: "/img/incubadora_incuiair.jpg",
    categoria: "incubadoras"
  },
  {
    id: "hps300",
    nombre: "Cuna Radiante ATOM Infa Warmer i",
    descripcion: "La Cuna radiante Infa Warmer i con pantalla LCD calienta eficazmente al lactante, mitigando así la tensión que provoca la disminución de la temperatura corporal.",
    stock: 4,
    precio: 12000,
    imagen: "/img/cuna_radiante-infa_warmer_i_atom.jpg",
    categoria: "servocunas"
  },
  {
    id: "mjq934",
    nombre: "Cuna Radiante ATOM Sunflower Warmer",
    descripcion: "La Incubadora radiante SunFlower calienta eficazmente al lactante, mitigando así la tensión que provoca la disminución de la temperatura corporal.",
    stock: 1,
    precio: 13000,
    imagen: "/img/cuna_radiante-sunflower_warmer_atom.jpg",
    categoria: "servocunas"
  },
  {
    id: "sdf452",
    nombre: "Monitor Fetal COMEN C11-Star 5000 ",
    descripcion: "El monitor fetal C11 o STAR 5000E se puede utilizar para controlar la frecuencia cardíaca fetal (FHR), las contracciones maternas (Toco) y el movimiento fetal (FM). Tiene una pantalla a color de 5,6 pulgadas, con botón giratorio y con un ángulo máximo de plegado de 90°.",
    stock: 10,
    precio: 2000,
    imagen: "/img/monitor_fetal-avalon_fm20_philips.jpg",
    categoria: "otros"
  },
  {
    id: "khg522",
    nombre: "Unidad de Reanimación ATOM Resusci Flow",
    descripcion: "El Resucitador Infantil Resusci Flow está diseñado para la reanimación de recién nacidos y lactantes de hasta 10kg de peso. Mediante un puerto para ingreso de gas con concentraciones de oxígeno de 21% a 100%.",
    stock: 3,
    precio: 1500,
    imagen: "/img/unidad_de_reanimacion-resusci_flow_atom.jpg",
    categoria: "otros"
  }
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos;