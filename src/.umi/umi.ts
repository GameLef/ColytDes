// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';
import 'D:/Project/github/ColytDes/src/global.scss';
import 'D:/Project/github/ColytDes/src/global.ts';
import { renderClient } from 'D:/Project/github/ColytDes/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from 'umi';


const publicPath = "/";
const runtimePublicPath = false;

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  await pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes,
      routeComponents,
    },
  });

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      const contextOpts = pluginManager.applyPlugins({
        key: 'modifyContextOpts',
        type: ApplyPluginsType.modify,
        initialValue: {},
      });
      const basename = contextOpts.basename || '/';
      const context = {
        routes,
        routeComponents,
        pluginManager,
        rootElement: contextOpts.rootElement || document.getElementById('root'),
        publicPath,
        runtimePublicPath,
        history: createHistory({
          type: contextOpts.historyType || 'browser',
          basename,
          ...contextOpts.historyOpts,
        }),
        basename,
      };
      return renderClient(context);
    },
  }))();
}


render();