import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="mt-8 text-4xl font-bold text-slate-900" {...props} />,
    h2: (props) => <h2 className="mt-8 text-2xl font-semibold text-slate-900" {...props} />,
    p: (props) => <p className="mt-4 leading-7 text-slate-700" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700" {...props} />,
    a: (props) => <a className="text-blue-700 underline" {...props} />,
    ...components,
  };
}
