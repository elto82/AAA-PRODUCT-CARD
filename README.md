# AAA-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

## Argiro Arias

### Ejemplo

```
import {ProductCard,ProductImage,
ProductTitle,
ProductButtons} from 'AAA-product-card'


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
```