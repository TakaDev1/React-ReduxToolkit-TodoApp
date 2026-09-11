# React-ReduxToolkit-TodoApp

React + TypeScript + Redux Toolkitを使用して、Todoの状態管理を実装した練習用アプリです。

## 概要

Redux Toolkitの`createSlice`を使用してTodoを管理します。

Todoは以下の操作に対応しています。

* Todoの追加
* Todoの完了状態の切り替え
* Todoの削除

## 使用技術

* React
* TypeScript
* Redux Toolkit
* React Redux
* Tailwind CSS
* uuid

## 主な機能

### Todo追加

入力したテキストからTodoを追加します。

Todo追加時には`uuid`を使用して一意なIDを生成します。

### Todo完了切り替え

Todoをクリックすると`completed`の状態を切り替えます。

完了したTodoには取り消し線を表示します。

### Todo削除

削除ボタンをクリックすると対象のTodoを削除します。

## Redux構成

`createSlice`を使用してTodoの状態とReducerを管理しています。

```text
todosSlice
├── addTodo
├── toggleTodo
└── removeTodo
```

`store.ts`では作成したReducerをRedux Storeに登録しています。

```text
TodoType
    ↓
todosSlice
    ↓
store
    ↓
Provider
    ↓
AddTodo / TodoList
```

## データ構造

Todoは以下の型で管理します。

```ts
type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};
```

## ディレクトリ構成

```text
src/
├── app/
│   └── store.ts
│
├── features/
│   └── todo/
│       ├── components/
│       │   ├── AddTodo.tsx
│       │   └── TodoList.tsx
│       │
│       ├── reducers/
│       │   └── TodoSlice.ts
│       │
│       └── types/
│           └── TodoType.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Redux Toolkitの学習ポイント

* `configureStore`
* `createSlice`
* `PayloadAction`
* `useSelector`
* `useDispatch`
* Redux StoreとReactコンポーネントの連携
* ReducerによるState更新
* Action Creator

