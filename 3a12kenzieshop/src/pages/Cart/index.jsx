import {
  Container,
  Button,
  TextField,
  CssBaseline,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { CardActions, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import formatValue from "../../utils/formatValue";
import { CardContainer, Container404, Image } from "./styles";
import { useEffect } from "react";

const useStyles = makeStyles({
  table: {
    maxWidth: 750,
    marginTop: "25px",
    margin: "15px",
    minHeight: 200,
  },
  root: {
    marginTop: "25px",
    minWidth: 275,
    maxHeight: 250,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: "15px",
    marginBottom: "15px",
    justifyContent: "center",
  },
});

function Cart() {
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  const history = useHistory();

  const subtotal = formatValue(
    cart.reduce((product, acc) => acc.price + product, 0).toFixed(2)
  );
  // async function loadProductsCart() {
  //     const response = await api.get("/products/");

  //     const data = response.data.map((product) => ({
  //       ...product,
  //       priceFormatted: formatValue(product.price),
  //     }));

  //     setLoading(false);
  //     setProducts(data);
  //   }
  //   useEffect(() => {
  //     loadProductsCart();
  //   }, []);

  if (!cart.length) {
    return (
      <Container404>
        <div>
          <h1 className="msg404">
            {" "}
            Sem produtos no carrinho, que tal ir as compras?
          </h1>
          <Button
            onClick={() => history.push("/")}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#403CAA",
            }}
          >
            Bora!
          </Button>
        </div>
      </Container404>
    );
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Produto</strong>
              </TableCell>
              <TableCell> </TableCell>
              <TableCell align="right">
                <strong>Preço</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <ul>
                {cart.map((product) => (
                  <li key={product.id} className="li-cart">
                    <div className="div-cart">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="cart-img"
                      />
                      <span className="span-cart">
                        {product.priceFormatted}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => {
              <TableRow key={product.title}>
                <TableCell>
                  <Image src={product.image} alt="Produto" />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell align="right">{product.priceFormatted}</TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Card>
        <CardContent>
          <Typography variant="h6" component="strong">
            <strong>Resumo do pedido</strong>
          </Typography>
          <CardContainer>
            <h4>{cart.length} Produto(s)</h4>
            <h4>{subtotal}</h4>
          </CardContainer>
        </CardContent>
        <CardActions className={classes.pos}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#403CAA",
            }}
            onClick={() => history.push("/")}
          >
            Finalizar o pedido
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Cart;
