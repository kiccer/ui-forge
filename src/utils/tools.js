// 排除数组中 hide、hidden 为 true 的项
export function filterHide (arr) {
    return arr?.filter(n => !n.hide && !n.hidden) ?? []
}
