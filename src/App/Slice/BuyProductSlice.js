import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {db} from "../../config/firebase.config.js";
import {addDoc, collection, doc, getDocs, updateDoc} from "firebase/firestore";

export const addProductReducers = createAsyncThunk(
    "addProductReducers", async (productData) => {
        const collectionList = collection(db, 'BUY_PRODUCT22')
        try {
            const dataStored = await addDoc(collectionList, productData);
            return dataStored
        } catch (e) {
            return e
        }
    }
)

export const getProductReducers = createAsyncThunk(
    "productFetchReducers", async () => {
        const firebaseCollectionName = collection(db, "BUY_PRODUCT")

        try {
            const getorderDetails = await getDocs(firebaseCollectionName)
            const requestData = getorderDetails.docs.map((dataArray) => ({
                    ...dataArray.data(),
                    id: dataArray.id
                })
            )
            const filterData = requestData.filter(product => product.isOrderPlaced === false)
            return filterData
        } catch (e) {
            return e
        }
    }
)

export const placeOrderReducer = createAsyncThunk(
    "placeOrderReducer",
    async (id) => {
        const productCollection = doc(db, "BUY_PRODUCT", id)

        try {
            await updateDoc(productCollection, {
                isOrderPlaced: true
            })
            return `Accepted Sucessfully of ${id}`
        } catch (e) {
            return e
        }
    }
)
const BuyProductSlice = createSlice({
    name: "BuyProductSlice",
    initialState: {
        addProduct: {
            loading: false,
            Error: false,
            Success: false,
        },
        getProduct: {
            loading: false,
            Error: false,
            Success: false,
            data: "",
        },
        orderPlaced: {
            loading: false,
            Error: false,
            Success: false,
        }


    },
    extraReducers: (builder) => {
        builder.addCase(addProductReducers.pending, (state) => {
            state.addProduct.loading = true
        })
            .addCase(addProductReducers.fulfilled, (state,) => {
                state.addProduct.loading = false
                state.addProduct.Success = true
            })
            .addCase(addProductReducers.rejected, (state) => {
                state.addProduct.loading = false
                state.addProduct.Error = true
            })

            .addCase(getProductReducers.pending, (state) => {
                state.getProduct.loading = true
            })
            .addCase(getProductReducers.fulfilled, (state, action,) => {
                state.getProduct.loading = false
                state.getProduct.Success = true
                if (state.getProduct.data.length !== 0) {
                    state.getProduct.data = ""
                }
                state.getProduct.data = (action.payload)
            })
            .addCase(getProductReducers.rejected, (state) => {
                state.getProduct.loading = false
                state.getProduct.Error = true
            })

            .addCase(placeOrderReducer.pending, (state) => {
                state.orderPlaced.loading = true
            })
            .addCase(placeOrderReducer.fulfilled, (state,) => {
                state.orderPlaced.loading = false
                state.orderPlaced.Success = true

            })
            .addCase(placeOrderReducer.rejected, (state) => {
                state.orderPlaced.loading = false
                state.orderPlaced.Error = true
            })

    }
})
export default BuyProductSlice.reducer