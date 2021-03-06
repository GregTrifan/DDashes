import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { LinksFunction } from "remix";

import {
  Box,
  Button,
  Text,
  ChakraProvider,
  Stack,
  Image,
  Spacer,
  Center,
  chakra,
  Flex,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import NavHeader from "./components/layout/header";
import theme from "./theme";
import { AiFillGithub } from "react-icons/ai";

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Layout>
          <Outlet />
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <ChakraProvider theme={theme}>
        <Layout>
          <div>
            <h1>There was an error</h1>
            <p>{error.message}</p>
            <hr />
            <p>
              Hey, developer, you should replace this with what you want your
              users to see.
            </p>
          </div>
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Center>
            <Heading>
              {caught.status}: {caught.statusText}
            </Heading>
          </Center>

          <Center>{message}</Center>
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")}>
      <NavHeader />
      <Box minH="78vh">
        <Box mt="12">{children}</Box>
      </Box>

      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="7xl"
        py="12"
        px={{ base: "4", md: "8" }}
      >
        <Center>
          <Flex>
            <Text alignSelf={{ base: "center", sm: "start" }}>
              &copy; {new Date().getFullYear()} Greg (aka TheSlayer-666)
            </Text>
            <chakra.a ml="13" href="https://github.com/TheSlayer-666">
              <AiFillGithub size={25} />
            </chakra.a>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}
