import React, {useState, useEffect } from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {BarCodeScanner } from 'expo-barcode-scanner';

function QRScanner () {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned')

    const askForCameraPermission = () => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted')
        })()
    }

    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setText(data);
        console.log('Type: ' + type + '\nData:' + data)
    }

    if (hasPermission === null) {
        return(
            <View>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }

    if (hasPermission === false) {
        return(
            <View>
                <Text style={{margin: 10}}>No access to camera</Text>
                <Button title={'Allow Camera'} />
            </View>
        )
    }

    return (
        <Text>QR Scanner</Text>
    )
}

const styles = StyleSheet.create({

})

export default QRScanner