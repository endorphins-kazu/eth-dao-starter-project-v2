import sdk from "./1-initialize-sdk.js";

// これは、前のステップで取得した私たちの ERC-20 コントラクトのアドレスです。
const token = sdk.getContract("0xB2C654f02ccdb44389cdeBC73b33e45F24cD08a9", "token");

(async () => {
  try {
    // // 設定したい最大供給量を設定
    const amount = 1000000;
    // デプロイされた ERC-20 コントラクトを通して、トークンをミント
    await (await token).mint(amount);
    const totalSupply = await (await token).totalSupply();

    // 今、私たちのトークンがどれだけあるかを表示
    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$TSC in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();