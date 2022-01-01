import {NextPage} from 'next';
// import * as React from 'react';
import Head from 'next/head';
import {NextPageContext} from 'next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const statusCodes: {[code: number]: string} = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
};

export type ErrorProps = {
  statusCode: number;
  title?: string;
};

export const getInitialProps = ({
  res,
  err,
}: NextPageContext): Promise<ErrorProps> | ErrorProps => {
  // const statusCode =
  //   res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  // return {statusCode};

  // eslint-disable-next-line no-console
  console.log({res, err});
  return {title: '', statusCode: 500};
};

/**
 * `Error` component used for handling errors.
 */
// export default class Error<P = {}> extends React.Component<P & ErrorProps> {
//   static displayName = 'ErrorPage';

//   static getInitialProps = _getInitialProps;
//   static origGetInitialProps = _getInitialProps;

//   render() {
//     const {statusCode} = this.props;
//     const title =
//       this.props.title ||
//       statusCodes[statusCode] ||
//       'An unexpected error has occurred';

//     return (
//       <>
//         <Head>
//           <title>
//             {statusCode}: {title}
//           </title>
//         </Head>

//         <div>
//           {statusCode ? <h1>{statusCode}</h1> : null}
//           <h2>{title}.</h2>
//         </div>
//       </>
//     );
//   }
// }

// import {UserBioEdit} from '../components/pages/UserBioEdit';

type Props = {
  statusCode: number;
  title?: string;
};

const UserEditPage: NextPage<Props> = ({statusCode, title}) => {
  // const title =
  //   this.props.title ||
  //   statusCodes[statusCode] ||
  //   'An unexpected error has occurred';

  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>

      <div>
        {statusCode ? <h1>{statusCode}</h1> : null}
        <h2>{title}.</h2>
      </div>
    </>
  );
};

export default UserEditPage;
