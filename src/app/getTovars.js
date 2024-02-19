import axios from 'axios';
import { create } from 'zustand';

const useTovars = create((set) => ({
  loading: false,
  tovars: [],
  error: null,

  getTovars: async () => {
    set(() => ({
      loading: true,
    }));
    try {
      const res = await axios.get('http://localhost:3000/tovars');
      const data = await res.data;
      set(() => ({
        tovars: data,
      }));
    } catch (err) {
      set(() => ({
        error: err.message,
      }));
    } finally {
      set(() => ({
        loading: false,
      }));
    }
  }
})
)
export default useTovars;