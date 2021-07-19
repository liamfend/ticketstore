import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type StackParamsList = {
  Home: undefined;
  Consult: {userId: string};
  Mine: undefined;
  ShareDetails: {id: string};
};

export type HomeScreenNavigationProps = StackNavigationProp<
  StackParamsList,
  'Home'
>;

export type ShareDetailsScreenNavigationProps = StackNavigationProp<
  StackParamsList,
  'ShareDetails'
>;
export type ShareDetailsStackScreenProps = StackScreenProps<
  StackParamsList,
  'ShareDetails'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
