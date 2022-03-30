import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculatorScreen = () => {

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const limpiar = () => {
        setNumero('0');
    }

    const positivoNegativo = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace ('-', '') );
        } else {
            setNumero( '-' + numero );
        }
    }

    const armarNumero = ( numeroTexto: string ) => {

        // No aceptar doble punto
        if ( numero.includes('.') && numeroTexto === '.' ) return;

        //Empieza con cero
        if ( numero.startsWith('0') || numero.startsWith('-0')){

            //punto decimal
            if ( numeroTexto === '.' ){
                setNumero( numero + numeroTexto );

                //Evaluar si es otro cero y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.')){
                setNumero( numero+numeroTexto );

                //Diferente de cero y no tiene punto
            } else if( numeroTexto !== '0' && !numero.includes('.')){
                setNumero( numeroTexto );

                // Evitar 0000.0
            } else if( numeroTexto === '0' && !numero.includes('.')){
                setNumero( numero );
            }   else {
                setNumero( numero+numeroTexto )
            }

        } else {
            setNumero( numero+numeroTexto )
        }
    }

    const btnDelete = () => {
        
        let numeroTemp = numero;
        //tiene un unico valor positivo o negativo ej. 8; -8; 2; -5
        if ( numero.length === 1 || ( numero.length === 2 && numero.includes('-')) ){
            setNumero('0');
        } else  {
            setNumero( numeroTemp.slice(0,-1) );
        }

    }

  return (
    <View style= { styles.calculadoraContainer }>
        <Text style= { styles.resultadoPequeno }>{ numeroAnterior }</Text>
        <Text 
            style= { styles.resultado }
            numberOfLines={1}
            adjustsFontSizeToFit = {true}
        >
            { numero }
        </Text>

        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto='C' color='#9B9B9B' accion={ limpiar }/>
            <BotonCalc texto='+/-' color='#9B9B9B' accion={ positivoNegativo }/>
            <BotonCalc texto='del' color='#9B9B9B' accion={ btnDelete }/>
            <BotonCalc texto='/' color='#FF9427' accion={ limpiar }/>
        </View>

        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto='7' accion={ armarNumero }/>
            <BotonCalc texto='8' accion={ armarNumero }/>
            <BotonCalc texto='9' accion={ armarNumero }/>
            <BotonCalc texto='x' color='#FF9427' accion={ limpiar }/>
        </View>

        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto='4' accion={ armarNumero }/>
            <BotonCalc texto='5' accion={ armarNumero }/>
            <BotonCalc texto='6' accion={ armarNumero }/>
            <BotonCalc texto='-' color='#FF9427' accion={ limpiar }/>
        </View>

        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto='1' accion={ armarNumero }/>
            <BotonCalc texto='2' accion={ armarNumero }/>
            <BotonCalc texto='3' accion={ armarNumero }/>
            <BotonCalc texto='+' color='#FF9427' accion={ limpiar }/>
        </View>

        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto='0' ancho accion={ armarNumero }/>
            <BotonCalc texto='.' accion={ armarNumero }/>
            <BotonCalc texto='=' color='#FF9427' accion={ limpiar }/>
        </View>

    </View>
  )
}
