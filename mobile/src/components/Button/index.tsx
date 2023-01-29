import { Container } from './style';
import { Text } from '../Text';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({label, onPress, disabled, loading}  : ButtonProps) => {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#FFF">
          {label}
        </Text>
      )}

      {loading && (
        <ActivityIndicator color="#FFF"/>
      )}
    </Container>
  );
};

export default Button;
