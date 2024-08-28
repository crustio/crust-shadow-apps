// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type {EndpointOption} from './types.js';

import {chainsCrustSVG} from '../ui/logos/chains/index.js';
import {chainsShadowSVG} from '../ui/logos/chains/index.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const prodChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'crust',
    providers: {
      // OnFinality: 'wss://crust.api.onfinality.io/ws?apikey=04dc9514-ec6c-4293-a739-aad78f8b26b5',
      'Crust Network 1': 'wss://rpc.crust.network',
      'Crust Network 2': 'wss://rpc.crustnetwork.xyz',
      'Crust Network 3': 'wss://rpc.crustnetwork.cc',
      'Crust Network 4': 'wss://rpc.crustnetwork.app',
      'DCloud Foundation': 'wss://rpc-crust-mainnet.decoo.io',
    },
    text: 'Crust',
    ui: {
      color: '#ff8812',
      logo: chainsCrustSVG
    }
  },
  {
    info: 'shadow',
    providers: {
      'Crust Network 1': 'wss://rpc-sha-subscan.crust.network',
      'Crust Network 2': 'wss://rpc-sha-subscan.crustnetwork.xyz',
      'Crust Network 3': 'wss://rpc-sha-subscan.crustnetwork.cc',
      'Crust Network 4': 'wss://rpc-sha-subscan.crustnetwork.app',
    },
    text: 'Crust Shadow',
    ui: {
      color: '#ff8812',
      logo: chainsShadowSVG
    }
  },
  {
    info: 'crustParachain',
    providers: {
      'Crust Network 1': 'wss://crust-parachain.crustapps.net',
      'Crust Network 2': 'wss://crust-parachain.crustnetwork.xyz',
      'Crust Network 3': 'wss://crust-parachain.crustnetwork.cc',
      'Crust Network 4': 'wss://crust-parachain.crustnetwork.app',
    },
    text: 'Crust Parachain',
    ui: {
      color: '#ff8812',
      logo: chainsCrustSVG

    }
  }
  // {
  //   info: 'crust-maxwell',
  //   text: t('rpc.crust.network', 'Crust Maxwell', { ns: 'apps-config' }),
  //   providers: {
  //     'Crust Network': maxwellEndPoints[0],
  //     'Decoo Technologies': maxwellEndPoints[1]
  //     // Pinknode: maxwellEndPoints[2]
  //   }
  // },
];
