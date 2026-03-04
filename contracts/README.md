# Stellar (Soroban) Contracts

Smart contracts for Synetr are built on **Stellar** using **Soroban** (Rust → WebAssembly).

## Prerequisites

- **Rust** (1.84.0+): `rustup` and `rustc`
- **Wasm target**: `rustup target add wasm32v1-none`
- **Stellar CLI**: [Install guide](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup)

```bash
# Install Stellar CLI (macOS/Linux)
curl -fsSL https://github.com/stellar/stellar-cli/raw/main/install.sh | sh

# Or via Homebrew
brew install stellar-cli
```

## Initialize a new contract

From this directory:

```bash
stellar contract init synetr-event
cd synetr-event
```

## Build & test

```bash
cargo build --target wasm32v1-none
stellar contract test
```

## Deploy (testnet)

```bash
stellar contract deploy \
  --network testnet \
  --source <KEY_NAME> \
  --wasm target/wasm32v1-none/release/synetr_event.wasm
```

## Resources

- [Stellar Smart Contracts (Soroban) – Getting started](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup)
- [Soroban CLI](https://developers.stellar.org/docs/build/smart-contracts/getting-started/setup#install-the-soroban-cli)
