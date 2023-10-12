#!/usr/bin/env node
import 'source-map-support/register';
import { AppStack } from './stack/app-stack';
import { App } from 'aws-cdk-lib';
const app = new App();

new AppStack(app, 'AppStack');