import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Formulario from './src/components/Formulario';
import Pais from './src/components/Pais';

export default function App() {
  const [busqueda, guardarbusqueda] = useState({
    pais:'',
  })

  useEffect(() => {
    const {pais} = busqueda;
    const consultarPais = async () => {
      if(consultar){
        const url = `https://restcountries.eu/rest/v2/alpha/${pais}`;
        try{
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          guardarresultado(resultado);
          guardarconsultar(false);
        } catch (error){
          mostrarAlerta();
        }
      }
    };
    constultarPais();
  },[consultar]);

  const mostarAlerta = () => {
    Alert.alert('Error','No hay resultado intenta con otra ciudad o pais'),
    [{Text:'Ok'}];
  }

  return(
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario
          busqueda={busqueda}
          guardarbusqueda={guardarbusqueda}
        />
        <Pais resultado={resultado} />
      </View>
    </View>
  );
}

