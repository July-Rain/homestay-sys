package lc.platform.admin.modules.sys.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * 预约
 *
 * @author sinorock.net
 * @email ${email}
 * @date 2018-12-29 14:18:35
 */
@TableName("sys_book")
public class SysBookEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 预约的记录的id
     */
    @TableId
    private String id;
    /**
     * 人名
     */
    private String userName;
    /**
     * 联系电话
     */
    private String userPhone;
    /**
     * 预约房间
     */
    private String bookType;
    /**
     * 预约人id
     */
    private String bookPersonId;
    /**
     * 备注
     */
    private String remark;
    /**
     * 预约开始时间
     */
    private Date bookStartTime;
    /**
     * 预约结束时间
     */
    private Date bookEndTime;
    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 设置：预约的记录的id
     */
    public void setId(String id) {
        this.id = id;
    }

    /**
     * 获取：预约的记录的id
     */
    public String getId() {
        return id;
    }

    /**
     * 设置：人名
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * 获取：人名
     */
    public String getUserName() {
        return userName;
    }


    /**
     * 设置：联系电话
     */
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    /**
     * 获取：联系电话
     */
    public String getUserPhone() {
        return userPhone;
    }

    /**
     * 设置：预约风格
     */
    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    /**
     * 获取：预约风格
     */
    public String getBookType() {
        return bookType;
    }

    /**
     * 设置：备注
     */
    public void setRemark(String remark) {
        this.remark = remark;
    }

    /**
     * 获取：备注
     */
    public String getRemark() {
        return remark;
    }

    public Date getBookStartTime() {
        return bookStartTime;
    }

    public void setBookStartTime(Date bookStartTime) {
        this.bookStartTime = bookStartTime;
    }

    public Date getBookEndTime() {
        return bookEndTime;
    }

    public void setBookEndTime(Date bookEndTime) {
        this.bookEndTime = bookEndTime;
    }

    /**
     * 设置：创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取：创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    public String getBookPersonId() {
        return bookPersonId;
    }

    public void setBookPersonId(String bookPersonId) {
        this.bookPersonId = bookPersonId;
    }
}
