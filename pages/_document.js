import Document from 'next/document';
import { getDocumentInitialProps } from '../utils'

export default class MyDocument extends Document {
  static getInitialProps = (ctx) => getDocumentInitialProps(ctx);
}