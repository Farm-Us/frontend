// farmus_frontend/src/store/userStore.ts

// Zustand 라이브러리에서 'create' 함수를 가져옵니다. 이것이 스토어를 만드는 핵심 함수입니다.
import { create } from 'zustand';

// --- 타입 정의 시작 ---
// 스토어에서 사용할 상태(State)와 액션(Action)의 타입을 미리 정의합니다.
// 이렇게 하면 VSCode가 스토어의 모든 속성과 함수의 타입을 정확히 알고, 자동완성과 에러 체크를 완벽하게 해줍니다.
interface UserState {
  isLoggedIn: boolean;
  user: {
    name?: string; // name은 문자열이고, 있을 수도 없을 수도 있습니다.
    email?: string; // email도 마찬가지입니다.
    // 여기에 추가적으로 필요한 사용자 정보 타입을 정의할 수 있습니다.
  } | null; // 또는 user 객체 자체가 null일 수 있습니다.
  login: (accessToken: string, userData: object) => void; // login 액션의 타입 정의
  logout: () => void; // logout 액션의 타입 정의
}
// --- 타입 정의 끝 ---

/**
 * 사용자 관련 상태(State)와 행동(Action)을 관리하는 Zustand 스토어(보관함)를 생성합니다.
 * create<UserState> 처럼, 우리가 위에서 정의한 타입을 제네릭(<>)으로 넣어주면
 * 이 스토어는 UserState 타입의 규칙을 반드시 따라야 함을 의미합니다.
 */
const useUserStore = create<UserState>((set) => ({
  // --- State (상태) ---
  isLoggedIn: false, // 앱이 처음 시작될 때, 사용자는 로그인되지 않은 상태입니다.
  user: null, // 처음에는 사용자 정보가 없습니다.

  // --- Action (상태를 변경하는 함수들) ---

  /**
   * 로그인 처리를 위한 액션
   * @param {string} accessToken - 백엔드로부터 받은 JWT 액세스 토큰
   * @param {object} userData - 백엔드로부터 받은 사용자 정보
   */
  login: (accessToken, userData) => {
    // 1. 브라우저의 로컬 스토리지에 액세스 토큰을 저장합니다.
    localStorage.setItem('accessToken', accessToken);

    // 2. set 함수를 사용하여 스토어의 상태를 업데이트합니다.
    set({ isLoggedIn: true, user: userData });
  },

  /**
   * 로그아웃 처리를 위한 액션
   */
  logout: () => {
    // 1. 로컬 스토리지에서 액세스 토큰을 제거합니다.
    localStorage.removeItem('accessToken');

    // 2. set 함수를 사용하여 스토어의 상태를 초기 상태로 되돌립니다.
    set({ isLoggedIn: false, user: null });
  },
}));

// 다른 컴포넌트에서 이 스토어를 쉽게 사용할 수 있도록 내보냅니다.
export default useUserStore;