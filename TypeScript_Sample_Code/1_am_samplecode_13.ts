{
  let val1: string = undefined; //エラー
  let val2: string = null; //エラー

  console.log(val1);
  console.log(val2);

  let val3: string | undefined = undefined;
  let val4: string | null = null;
}
