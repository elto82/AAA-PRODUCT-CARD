import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../src/components';

const product = {
  id: "2",
  title: "Coffee Mug - MEME!!!",
  // img: "./coffee-mug2.png",
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 0,
        maxCount: 10,
      }}
    >
      {
        ({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
      }
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
