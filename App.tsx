import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComponent from './src/home/components/button-component';
import TitleComponent from './src/home/components/title-component';
import ImageComponent from './src/home/components/image-component';
import LoveText from './src/home/components/loveText-component';

interface Props {
  onImageChange: any;
}

export default function App(props: Props) {

  const images = [
    require("./assets/adaptive-icon.png"),
    require("./assets/favicon.png"),
    require("./assets/icon.png"),
  ];

  const imageLove = [
    require("./assets/2764.png"),
  ];


  const [showMessage, setShowMessage] = useState(true); // Estado para controlar a exibição da mensagem
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePress = () => {
    setShowMessage(false); // Quando o botão for pressionado, esconde a mensagem
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false); // Esconde a mensagem após 3 segundos (ajuste o tempo conforme necessário)
    }, 20000);

    return () => clearTimeout(timer); // Limpa o timer quando o componente é desmontado
  }, []);



  return (
    <View style={styles.container}>
      {showMessage ? ( // Renderiza a mensagem se showMessage for true
        <LoveText imageLoveProps={imageLove}

          lovetext='Ola amor da minha vida te peço que aguarde 20 segundos para que você possa ver alguns dos nossos momentos felizes juntos.' />
      ) : (
        <>
          <TitleComponent titleApp='Love Moments' />
          <ImageComponent propsImage={images[currentImageIndex]} />
          <ButtonComponent handlePress={handlePress} onImageChange={props.onImageChange} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1
  },

});


