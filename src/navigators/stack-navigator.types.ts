import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type IIndexStack = {
  Map: undefined;
  Listing: { id: number; image: string; title: string; distance: number };
};

export type IndexScreenProps<T extends keyof IIndexStack> =
  NativeStackScreenProps<IIndexStack, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IIndexStack {}
  }
}
