# capacitor-apple-passkit

Plugin that allows access to Apple PassKit functions.

## Versions

Capacitor 5 -> Version 0.0.1
Capacitor 6 -> Version 0.0.3

| Capacitor Version         | Plugin Version                             |
| ------------- | -------------------------------- |
| Capacitor 5 | 0.0.1 |
| Capacitor 6 | 0.0.3 |

## Install

```bash
npm install capacitor-apple-passkit
npx cap sync
```

## API

<docgen-index>

* [`addToWallet(...)`](#addtowallet)
* [`isWalletAppAvailable()`](#iswalletappavailable)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addToWallet(...)

```typescript
addToWallet(options: { base64: string; }) => Promise<{ message: string; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ base64: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### isWalletAppAvailable()

```typescript
isWalletAppAvailable() => Promise<{ message: string; }>
```

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------

</docgen-api>
