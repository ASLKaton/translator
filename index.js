function replaceChars(str) {
  // Создаем объект-карту соответствий заменяемых символов и их заменителей
  const charMap = {
    а: "a_d",
    б: "e_k",
    в: "u_s",
    г: "i_q",
    д: "o_x",
    е: "p_m",
    ё: "y_f",
    ж: "t_l",
    з: "r_n",
    и: "w_z",
    й: "g_j",
    к: "b_v",
    л: "c_h",
    м: "f_k",
    н: "v_x",
    о: "n_q",
    п: "l_m",
    р: "j_k",
    с: "k_z",
    т: "h_s",
    у: "d_r",
    ф: "q_p",
    х: "x_y",
    ц: "z_w",
    ч: "m_f",
    ш: "s_l",
    щ: "a_t",
    ъ: "e_g",
    ы: "u_b",
    ь: "i_c",
    э: "o_d",
    ю: "p_q",
    я: "y_z",
    А: "A_D",
    Б: "E_K",
    В: "U_S",
    Г: "I_Q",
    Д: "O_X",
    Е: "P_M",
    Ё: "Y_F",
    Ж: "T_L",
    З: "R_N",
    И: "W_Z",
    Й: "G_J",
    К: "B_V",
    Л: "C_H",
    М: "F_K",
    Н: "V_X",
    О: "N_Q",
    П: "L_M",
    Р: "J_K",
    С: "K_Z",
    Т: "H_S",
    У: "D_R",
    Ф: "Q_P",
    Х: "X_Y",
    Ц: "Z_W",
    Ч: "M_F",
    Ш: "S_L",
    Щ: "A_T",
    Ъ: "E_G",
    Ы: "U_B",
    Ь: "I_C",
    Э: "O_D",
    Ю: "P_Q",
    Я: "Y_Z"
  };

  // Проходимся по каждому символу строки и заменяем его на соответствующий заменитель из карты
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += charMap[char] || char;
  }

  return result;
}

function replaceCharsToRusian(str) {
  const charMap = {
    a_d: "а",
    e_k: "б",
    u_s: "в",
    i_q: "г",
    o_x: "д",
    p_m: "е",
    y_f: "ё",
    t_l: "ж",
    r_n: "з",
    w_z: "и",
    g_j: "й",
    b_v: "к",
    c_h: "л",
    f_k: "м",
    v_x: "н",
    n_q: "о",
    l_m: "п",
    j_k: "р",
    k_z: "с",
    h_s: "т",
    d_r: "у",
    q_p: "ф",
    x_y: "х",
    z_w: "ц",
    m_f: "ч",
    s_l: "ш",
    a_t: "щ",
    e_g: "ъ",
    u_b: "ы",
    i_c: "ь",
    o_d: "э",
    p_q: "ю",
    y_z: "я",
    A_D: "А",
    E_K: "Б",
    U_S: "В",
    I_Q: "Г",
    O_X: "Д",
    P_M: "Е",
    Y_F: "Ё",
    T_L: "Ж",
    R_N: "З",
    W_Z: "И",
    G_J: "Й",
    B_V: "К",
    C_H: "Л",
    F_K: "М",
    V_X: "Н",
    N_Q: "О",
    L_M: "П",
    J_K: "Р",
    K_Z: "С",
    H_S: "Т",
    D_R: "У",
    Q_P: "Ф",
    X_Y: "Х",
    Z_W: "Ц",
    M_F: "Ч",
    S_L: "Ш",
    A_T: "Щ",
    E_G: "Ъ",
    U_B: "Ы",
    I_C: "Ь",
    O_D: "Э",
    P_Q: "Ю",
    Y_Z: "Я"
  };

  for (let pattern in charMap) {
    let regex = new RegExp(pattern, "g"); // Создаем регулярное выражение с флагом g
    str = str.replace(regex, charMap[pattern]); // Заменяем все вхождения шаблона
  }

  return str;
}

// Пример использования
const inputRussian = document.querySelector("#inputRussian");
const buttonRussian = document.querySelector("#buttonRussian");
const resultStrange = document.querySelector("#resultStrange");

buttonRussian.addEventListener("click", () => {
  const output = replaceChars(inputRussian.value);
  resultStrange.innerText = output;
});

// Пример использования
const inputStrange = document.querySelector("#inputStrange");
const buttonStrange = document.querySelector("#buttonStrange");
const resultRussian = document.querySelector("#resultRussian");

buttonStrange.addEventListener("click", () => {
  const output = replaceCharsToRusian(inputStrange.value);
  resultRussian.innerText = output;
});
