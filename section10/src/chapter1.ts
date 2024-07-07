interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial<T> 타입 직접 구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};

// Required<T>

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 반드시 썸네일 프로퍼티가 존재해야 하는 게시글

// Required<T> 직접 구현
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  // ❌
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// Readonly 타입
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = '해킹당함'; ❌
