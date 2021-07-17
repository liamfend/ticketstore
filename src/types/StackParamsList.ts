import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackParamsList = {
  Home: undefined;
  Consult: {userId: string};
  Mine: undefined;
};

export type ConsultScreenNavigationProps = NativeStackNavigationProp<
  StackParamsList,
  'Home'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
