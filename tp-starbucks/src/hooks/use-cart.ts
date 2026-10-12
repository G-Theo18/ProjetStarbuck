import { create } from "zustand";

import type { CartData } from "@/tp-kit/types";

export const useCart = create<CartData>()(() => ({
    lines: [],
}));