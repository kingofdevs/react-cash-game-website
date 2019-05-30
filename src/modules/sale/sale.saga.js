import api from "../../api";

import * as  saleAction from "./sale.actions";

import { takeEvery, put } from "redux-saga/effects";

export const userSessionId = (state) => state.auth.userSessionId;

function* fetchOffers() {
	try {
		const result = yield api.sale.getOffers();

		yield put(saleAction.setOffers({ offers: result.data, offersStatus: "success" }));
	} catch (e) {
		console.log("fetchFriends", e);
	}
}

export function* watchFetchSale() {
	yield takeEvery(saleAction.getOffersSaga, fetchOffers);
}


