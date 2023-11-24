import ImageSlider from '@components/image-slider';

const style = {
  width: '100%',
  aspectRatio: '10 / 6'
}

export default function Page () {
  return (
    <main style={style}>
      <h1>Image Slider</h1>
      <ImageSlider images={images} />
    </main>
  );
}

const images = [
  {
    src: '/aroids/anthurium-veitchii.jpg',
    alt: 'anthurium-veitchii.jpg'
  },
  {
    src: '/aroids/epipremnum-cebu-blue.jpg',
    alt: 'epipremnum-cebu-blue.jpg'
  },
  {
    src: '/aroids/monstera-burle-marx-flame.jpg',
    alt: 'monstera-burle-marx-flame.jpg'
  },
  {
    src: '/aroids/philodendron-melanochrysum.jpg',
    alt: 'philodendron-melanochrysum.jpg'
  },
  {
    src: '/aroids/philodendron-spiritus-sancti.jpg',
    alt: 'philodendron-spiritus-sancti.jpg'
  },
  {
    src: '/aroids/monstera-subpinnata.jpg',
    alt: 'monstera-subpinnata.jpg'
  }
]
