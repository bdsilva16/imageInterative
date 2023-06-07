import { View } from 'react-native';
import ButtonComponent from './src/home/components/button-component';
import TitleComponent from './src/home/components/title-component';
import ImageComponent from './src/home/components/image-component';

interface Props {
  onImageChange: any
  handlePress: any

}
// const titleApp = "AppImage"
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const images = [
    require("../../../assets/adaptive-icon.png"),
    require("../../../assets/favicon.png"),
    require("../../../assets/icon.png"),
];

const handlePress = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
};

export default function App(props: Props) {
  return (
    <View >
      <TitleComponent titleApp='AppImage' />
      <ImageComponent />
      <ButtonComponent handlePress={() => props.handlePress} onImageChange={() => props.onImageChange} />
    </View>
  );
}

