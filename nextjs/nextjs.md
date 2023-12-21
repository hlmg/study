# nextjs

## File System Routing

```text
home/     abc.com/home      plan path
[slug]/   abc.com/{slug}    dynamic path
(group/)  abc.com/          just for grouping
```

```text
// 해당 경로로 이동
<Link href={"/"}>
    Home
</Link>
```

Dynamic Data Fetching

```text
fetch('http://...', {cache: "no-store"});
```

background-revalidation

```text
// 10초마다 재검증
fetch('http://...', {next: {revalidate: 10}});
```

generate-static-params

- 해당 레이아웃 또는 페이지가 생성되기 전에 빌드 시간에만 한번 실행됨
- Revalidation(ISR)중에는 다시 호출되지 않음
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params

loading-ui-and-streaming / error handling

- 폴더 하위에 loading.js, error.js 을 생성해서 해당 컴포넌트가 loading, error일 때 처리할 화면을 설정할 수 있음
- https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
- https://nextjs.org/docs/app/building-your-application/routing/error-handling
