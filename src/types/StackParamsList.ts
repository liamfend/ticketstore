import {StackNavigationProp} from '@react-navigation/stack';

export type StackParamsList = {
  Home: undefined;
  Consult: {userId: string};
  Mine: undefined;
};

export type ConsultScreenNavigationProps = StackNavigationProp<
  StackParamsList,
  'Home'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
