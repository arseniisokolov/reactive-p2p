import { ComponentStateType } from "../component.base";
import { Page } from "../page.base";

/** Символ для страницы 404 */
export const NotFoundRoute: unique symbol = Symbol('404');

/** Дерево рутов приложения */
export type RoutingTreeType = RoutingTreeBranchType & {
    [NotFoundRoute]: { Page: PageConstructorType }
};

/** Ветвь дерева рутов приложения */
export type RoutingTreeBranchType = {
    [path: string]: RouteNode
};

/** Функция-конструктор конкретных страниц */
export type PageConstructorType = new (state: ComponentStateType) => Page;

/** Узел дерева рутов */
export type RouteNode = {
    /** Функция-конструктор страницы */
    Page?: PageConstructorType,
    /** Дочерние руты в виде ветви дерева */
    children?: RoutingTreeBranchType,
    /** Редирект на другой рут */
    redirectTo?: string,
}

export type RouterServiceConfigType = {
    /** Дерево рутов приложения */
    AppRoutingTree: RoutingTreeType,
    /** Корневой router-outlet приложения (БЭМ-блок) */
    RootOutlet: string,
}