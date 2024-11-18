"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import Loader from "@/components/common/Loader";
import { PersistGate } from "redux-persist/es/integration/react";
import LayoutComponent from "./LayoutComponent";
const ReduxProviderComponent = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={
          <div className="w-full h-[calc(100dvh)] flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <LayoutComponent>{children}</LayoutComponent>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProviderComponent;
