import { Provider } from "react-redux";
import store from "./store";
import theme from './theme.js'
//UI things
import { ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//My components
import Login from "./components/Login";
import Footer from "./components/Footer";
import Image from "./components/Image";
import LineBox from "./components/LineBox";
 
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="md"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            space={2}
            columns={2}
            boxShadow={3}
            borderRadius={2}
            bgcolor="#FFF"
            overflow="hidden"
            sx={{ minHeight: "70%" }}
          >
            <Grid
              item
              xs={2}
              md={1}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid sx={{ textAlign: "center" }}>
                <Image />
              </Grid>
              <LineBox/>
            </Grid>
            <Grid item xs={2} md={1} >
              <Login />
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
