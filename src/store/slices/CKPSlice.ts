import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

function loadProgress() {
  const raw = localStorage.getItem("Gameprogress");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

const saved = loadProgress();

interface CKPState {
  Coins: number;
  Kills: number;
  Power: number;
  Lvl: number;
  ShopID: number;
}

const initialState: CKPState = saved || {
  Coins: 0,
  Kills: 0,
  Power: 1,
  Lvl: 0,
  ShopID: 0,
};

const CKPSlice = createSlice({
  name: "CKP",
  initialState,
  reducers: {
    getCoin: (state, action: PayloadAction<number>) => {
      state.Coins += action.payload;
    },
    spentCoin: (state, action: PayloadAction<number>) => {
      state.Coins -= action.payload;
    },
    addKills: (state, action: PayloadAction<number>) => {
      state.Kills += action.payload;
    },
    increasePower: (state, action: PayloadAction<number>) => {
      state.Power += action.payload;
    },
    increaseLvl: (state, action: PayloadAction<number>) => {
      state.Lvl += action.payload;
    },
    increaseShopid: (state, action: PayloadAction<number>) => {
      state.ShopID += action.payload;
    },
  },
});

export const { getCoin, addKills, spentCoin, increasePower, increaseLvl, increaseShopid } = CKPSlice.actions;
export default CKPSlice.reducer;
