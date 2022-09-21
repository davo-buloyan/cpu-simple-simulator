import { mokeData } from "./data.mjs";

class fakeCPUSimpleSimulator {
  whiteLine = [];

  data = {}

  constructor() {

    this.data = mokeData

    this.registers = {
      r1: 0,
      r2: 0,
      r3: 0,
      r4: 0,
      r5: 0,
      r6: 0,
      r7: 0,
      r8: [],
      rflags: 0,
      ip: 0,
    };
  }

  fetchData() {
    Object.entries(this.data).forEach(([key, value]) => {
      const data = value;
      switch (data[0]) {
        case "mov":
          this.mov(data[1], data[2]);
          break;
        case "add":
          this.add(data[1], data[2]);
          console.log();
          break;
        case "sub":
          this.sub(data[1], data[2]);
          break;
        case "div":
          this.div(data[1], data[2]);
          break;
        case "xor":
          this.xor(data[1], data[2]);
          break;
        case "not":
          this.not(data[1], data[2]);
          break;
        case "label":
          console.log("label");
          break;
        case "cpm":
          console.log("cpm");
          break;
        case "j":
          console.log("j");
          break;
        default:
          break;
      }
    });
  }

  mov(src, dest) {
    this.registers[src] = this.registers[dest] || +dest;
    console.log(this.registers[src]);
  }

  add(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] + +arg2;
    console.log('add', this.registers.r1);
  }

  mul(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] * arg2;
  }

  sub(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] - arg2;
  }

  div(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] / arg2;
  }

  xor(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] ^ arg2;
  }

  not(arg1, arg2) {
    this.registers[arg1] = !this.registers[arg1] && !arg2;
  }

  or(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] | +arg2;
  }

  and(arg1, arg2) {
    this.registers[arg1] = this.registers[arg1] & +arg2;
  }

  cmp(arg1, arg2) {
    if(arg1 > arg2) {
      this.registers.rflags = 1
    } else if (arg1 < arg2) {
      this.registers.rflags = -1
    }
  }
}

new fakeCPUSimpleSimulator().fetchData();
