import { StyleSheet, View ,Text, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/ui/input-field';
import PrimaryButton from '../../components/ui/primary-button';
import PaymentOption from '../../components/ui/payment-option';
import ProductCard from '../../components/ui/product-сard';
import SizeSelector from '../../components/ui/size-selector';

export default function HomeScreen() {
  return (
    
<View style={styles.main}>
  <SafeAreaView></SafeAreaView>
   <InputField placeholder="Phone" value={undefined} onChangeText={undefined} />
   <PrimaryButton title="Text" onPress={undefined}></PrimaryButton>
   <PaymentOption title="CASH" selected={false} onPress={undefined} />
   <ProductCard product={{ id: '0', name: 'Coffe', price: 15.00, imageUrl: '...' }}></ProductCard>
   <SizeSelector></SizeSelector>
</View>
  );
}
const styles = StyleSheet.create({
 main: {
    padding: 8,
  },
});
