class Person{
// 屬性
    String name;
    int age;
    double weight;
// 建構子
    Person(){}
    Person(String name, int age, double weight){ 
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

// 方法
    String displayName(){
        return this.name;
    }

}
// Java寫法
Person sally = new Person();
Person peter = new Person("Peter", 40, 78.5)